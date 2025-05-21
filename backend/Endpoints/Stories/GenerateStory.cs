using FastEndpoints;

namespace backend.Endpoints.Stories;

public class GenerateStoryRequest
{
    public string CharacterName { get; set; } = string.Empty;
    public string PlotId { get; set; } = string.Empty;
}

public class GenerateStory : Endpoint<GenerateStoryRequest, string>
{
    private readonly StoryGenerationService _storyGenerationService;

    public GenerateStory(StoryGenerationService storyGenerationService)
    {
        _storyGenerationService = storyGenerationService;
    }

    public override void Configure()
    {
        Post("/api/stories/generate");
        AllowAnonymous();
    }

    public override async Task HandleAsync(GenerateStoryRequest req, CancellationToken ct)
    {
        var story = await _storyGenerationService.GenerateStoryAsync(req.CharacterName, req.PlotId);
        await SendAsync(story, cancellation: ct);
    }
} 