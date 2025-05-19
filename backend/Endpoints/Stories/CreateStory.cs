using FastEndpoints;
namespace backend.Endpoints.Stories;

public class CreateStoryRequest
{
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}

public class CreateStory : Endpoint<CreateStoryRequest, Story>
{
    private readonly StoryStorageService _storageService;

    public CreateStory(StoryStorageService storageService)
    {
        _storageService = storageService;
    }

    public override void Configure()
    {
        Post("/api/stories");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CreateStoryRequest req, CancellationToken ct)
    {
        var story = new Story
        {
            Title = req.Title,
            Content = req.Content
        };

        var createdStory = await _storageService.CreateStoryAsync(story);
        await SendCreatedAtAsync<GetStoryById>($"/api/stories/{createdStory.Id}", createdStory, cancellation: ct);
    }
} 