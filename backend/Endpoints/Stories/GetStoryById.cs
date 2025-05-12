using FastEndpoints;
using TinyTales.Models;

namespace TinyTales.Endpoints.Stories;

public class GetStoryById : EndpointWithoutRequest<Story>
{
    public override void Configure()
    {
        Get("/api/stories/{id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var id = Route<Guid>("id");
        // TODO: Retrieve story from database
        await SendAsync(new Story { Id = id }, cancellation: ct);
    }
} 