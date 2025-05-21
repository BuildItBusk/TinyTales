using System.Text.Json;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;

namespace backend.Endpoints.Stories;

public class StoryGenerationService
{
    private readonly HttpClient _httpClient;
    private readonly OpenAiOptions _options;
    private readonly ILogger<StoryGenerationService> _logger;
    private const string OpenAiEndpoint = "https://api.openai.com/v1/chat/completions";

    public StoryGenerationService(
        HttpClient httpClient, 
        IOptions<OpenAiOptions> options,
        ILogger<StoryGenerationService> logger)
    {
        if (options?.Value == null || string.IsNullOrEmpty(options.Value.ApiKey))
        {
            throw new ArgumentNullException(nameof(options));
        }

        _httpClient = httpClient;
        _options = options.Value;
        _logger = logger;
        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {_options.ApiKey}");
    }

    public async Task<string> GenerateStoryAsync(string characterName, string plotId)
    {
        var prompt = $"Skriv en godnat historie på dansk om {characterName}. " +
                    "Historien skal være rolig, beroligende og perfekt til godnat. " +
                    "Brug en blid og varm tone. Historien skal være omkring 300-400 ord lang " +
                    "og have en tydelig begyndelse, midte og en beroligende slutning.";

        var requestBody = new
        {
            model = _options.Model,
            messages = new[]
            {
                new { role = "system", content = "Du er en fortæller af beroligende godnathistorier for børn. Din tone er varm og indbydende." },
                new { role = "user", content = prompt }
            },
            temperature = _options.Temperature,
            max_tokens = _options.MaxTokens
        };

        var jsonRequest = JsonSerializer.Serialize(requestBody);
        _logger.LogInformation("Sending request to OpenAI: {Request}", jsonRequest);

        var response = await _httpClient.PostAsync(
            OpenAiEndpoint,
            new StringContent(jsonRequest, Encoding.UTF8, "application/json")
        );

        var responseContent = await response.Content.ReadAsStringAsync();
        _logger.LogInformation("Received response from OpenAI: {Response}", responseContent);

        if (!response.IsSuccessStatusCode)
        {
            throw new Exception($"OpenAI API error: {response.StatusCode}. Response: {responseContent}");
        }

        try
        {
            var responseObject = JsonSerializer.Deserialize<OpenAiResponse>(responseContent, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
            
            if (responseObject?.Choices == null || !responseObject.Choices.Any())
            {
                throw new Exception("No choices in OpenAI response");
            }

            return responseObject.Choices[0].Message.Content;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to deserialize OpenAI response: {Response}", responseContent);
            throw new Exception($"Failed to process OpenAI response: {ex.Message}");
        }
    }

    private class OpenAiResponse
    {
        public string Id { get; set; } = string.Empty;
        public string Object { get; set; } = string.Empty;
        public long Created { get; set; }
        public string Model { get; set; } = string.Empty;
        public List<Choice> Choices { get; set; } = new();
        public Usage Usage { get; set; } = new();
    }

    private class Choice
    {
        public int Index { get; set; }
        public Message Message { get; set; } = new();
        public string FinishReason { get; set; } = string.Empty;
    }

    private class Message
    {
        public string Role { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
    }

    private class Usage
    {
        public int PromptTokens { get; set; }
        public int CompletionTokens { get; set; }
        public int TotalTokens { get; set; }
    }
} 