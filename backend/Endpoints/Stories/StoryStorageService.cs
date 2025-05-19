using Azure.Data.Tables;

namespace backend.Endpoints.Stories;

public class StoryStorageService
{
    private readonly TableClient _tableClient;
    private const string TableName = "stories";

    public StoryStorageService(IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("AzureTableStorage") 
            ?? "UseDevelopmentStorage=true"; // This will use Azurite when running locally
        var tableServiceClient = new TableServiceClient(connectionString);
        _tableClient = tableServiceClient.GetTableClient(TableName);
        _tableClient.CreateIfNotExists();
    }

    public async Task<Story> CreateStoryAsync(Story story)
    {
        var entity = new TableEntity(story.Id.ToString(), "story")
        {
            { "Title", story.Title },
            { "Content", story.Content },
            { "CreatedAt", story.CreatedAt }
        };

        await _tableClient.AddEntityAsync(entity);
        return story;
    }

    public async Task<Story?> GetStoryAsync(Guid id)
    {
        try
        {
            var entity = await _tableClient.GetEntityAsync<TableEntity>(id.ToString(), "story");
            return new Story
            {
                Id = Guid.Parse(entity.Value.RowKey),
                Title = entity.Value.GetString("Title") ?? string.Empty,
                Content = entity.Value.GetString("Content") ?? string.Empty,
                CreatedAt = entity.Value.GetDateTime("CreatedAt") ?? DateTime.UtcNow
            };
        }
        catch (Exception)
        {
            return null;
        }
    }

    public async Task<IEnumerable<Story>> GetAllStoriesAsync()
    {
        var stories = new List<Story>();
        await foreach (var entity in _tableClient.QueryAsync<TableEntity>())
        {
            stories.Add(new Story
            {
                Id = Guid.Parse(entity.RowKey),
                Title = entity.GetString("Title") ?? string.Empty,
                Content = entity.GetString("Content") ?? string.Empty,
                CreatedAt = entity.GetDateTime("CreatedAt") ?? DateTime.UtcNow
            });
        }
        return stories;
    }
} 