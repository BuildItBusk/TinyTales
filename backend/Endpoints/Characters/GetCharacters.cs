using FastEndpoints;

namespace backend.Endpoints.Characters;

public class GetCharacters : EndpointWithoutRequest<List<Character>>
{
    public override void Configure()
    {
        Get("/api/characters");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var characters = new List<Character>
        {
            new()
            {
                Id = "polar-bear",
                Name = "Isbjørnen Theo",
                Description = "En snild isbjørn der elsker at fortælle historier om sine eventyr i Arktis",
                Emoji = "🐻‍❄️"
            },
            new()
            {
                Id = "parrot",
                Name = "Papegøjen Polly",
                Description = "En farverig papegøje der har rejst verden rundt og samlet på historier",
                Emoji = "🦜"
            },
            new()
            {
                Id = "hedgehog",
                Name = "Pindsvinet Pelle",
                Description = "En sød pindsvin der bor i en magisk have og kender alle skovens hemmeligheder",
                Emoji = "🦔"
            }
        };

        await SendAsync(characters, cancellation: ct);
    }
} 