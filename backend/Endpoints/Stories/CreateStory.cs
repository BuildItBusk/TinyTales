using FastEndpoints;
using TinyTales.Models;

namespace TinyTales.Endpoints.Stories;

public class CreateStoryRequest
{
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}

public class CreateStory : Endpoint<CreateStoryRequest, Story>
{
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

        // TODO: Save story to database
        await SendCreatedAtAsync<GetStoryById>($"/api/stories/{story.Id}", story, cancellation: ct);
    }
} 