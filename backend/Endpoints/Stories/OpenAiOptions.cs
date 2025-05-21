public class OpenAiOptions
{
    public const string SectionName = "OpenAI";
    public string ApiKey { get; set; } = string.Empty;
    public string Model { get; set; } = "gpt-3.5-turbo";
    public double Temperature { get; set; } = 0.8;
    public int MaxTokens { get; set; } = 800;
}