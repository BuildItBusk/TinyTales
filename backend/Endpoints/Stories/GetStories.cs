using FastEndpoints;

namespace TinyTales.Endpoints.Stories;

public class GetStories : EndpointWithoutRequest
{
    public override void Configure()
    {
        Get("/api/stories");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        // TODO: Implement story retrieval
        await SendAsync(new { message = "Stories endpoint" }, cancellation: ct);
    }
} 