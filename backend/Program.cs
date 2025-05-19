using FastEndpoints;
using backend.Endpoints.Characters;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Cors.Infrastructure;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddFastEndpoints();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.AddHealthChecks();
    builder.Services.AddCors(options => ConfigureCors(options, builder.Configuration));
}

var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    // Use CORS
    app.UseCors();

    // Use FastEndpoints
    app.UseFastEndpoints();

    // Map health checks
    app.MapHealthChecks("/health");

    app.Run();
}

/// <summary>
/// Configures the CORS policy for the application, using the allowed origins from appsettings.json or environment variables.
/// </summary>
/// <param name="options">The CORS options to configure.</param>
/// <param name="configuration">The configuration to use.</param>
static void ConfigureCors(CorsOptions options, IConfiguration configuration)
{
    options.AddDefaultPolicy(policy =>
    {
        var allowedOrigins = configuration.GetSection("AllowedOrigins").Get<string[]>();
        
        if (allowedOrigins == null || !allowedOrigins.Any())
        {
            throw new InvalidOperationException("CORS configuration is missing. Please configure 'AllowedOrigins' in appsettings.json or through environment variables.");
        }
        
        policy.WithOrigins(allowedOrigins)
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
}
