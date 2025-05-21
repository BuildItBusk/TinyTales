using FastEndpoints;

namespace backend.Endpoints.Stories;

public readonly record struct CreateStoryRequest(
    string Character,
    string Scenario,
    string Location
);

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
            Title = $"{req.Character} in {req.Location}", // Temporary title until we have AI generation
            Content = $"A story about {req.Character} in {req.Location} where {req.Scenario}" // Temporary content until we have AI generation
        };

        var createdStory = await _storageService.CreateStoryAsync(story);
        await SendCreatedAtAsync<GetStoryById>($"/api/stories/{createdStory.Id}", createdStory, cancellation: ct);
    }
} 