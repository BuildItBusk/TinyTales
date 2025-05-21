using FastEndpoints;

namespace backend.Endpoints.Plots;

public readonly record struct Plot(
    string Id,
    string Title,
    string Description,
    string Emoji
);

public class GetPlotsRequest
{
    public string CharacterName { get; set; } = string.Empty;
}

public class GetPlots : Endpoint<GetPlotsRequest, List<Plot>>
{
    public override void Configure()
    {
        Get("/api/plots");
        AllowAnonymous();
    }

    public override async Task HandleAsync(GetPlotsRequest req, CancellationToken ct)
    {
        var plots = new List<Plot>
        {
            new(
                "lost-treasure",
                "Den Fortabte Skat",
                $"{req.CharacterName} finder et mystisk kort, der fører til en skjult skat, men stien er fuld af gåder og udfordringer",
                "🗺️"
            ),
            new(
                "magical-portal",
                "Den Magiske Dør",
                $"{req.CharacterName} opdager en mærkelig dør, der fører til en verden, hvor alt er anderledes",
                "🚪"
            ),
            new(
                "friendly-ghost",
                "Det Venlige Spøgelse",
                $"{req.CharacterName} møder et spøgelse, der har brug for hjælp til at finde fred, men først skal de løse et mysterium sammen",
                "👻"
            ),
            new(
                "robot-friend",
                "Robotten der Ville Være Ven",
                $"{req.CharacterName} møder en robot, der vil gerne lære om venskab, men forstår ikke følelser",
                "🤖"
            ),
            new(
                "dragon-egg",
                "Drageægget",
                $"{req.CharacterName} finder et drageæg, men det har brug for særlig pleje for at klækkes",
                "🥚"
            )
        };

        await SendAsync(plots, cancellation: ct);
    }
} 