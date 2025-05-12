# TinyTales

A modern web application for creating and sharing short stories.

## Project Structure

```
my-story-app/
├── frontend/        # Next.js (TypeScript) frontend application
│   ├── app/        # Next.js app directory
│   ├── public/     # Static assets
│   └── ...         # Configuration files
├── backend/        # C# Minimal API (ASP.NET) backend
│   ├── Endpoints/  # FastEndpoints API endpoints
│   ├── Models/     # Domain models
│   └── ...         # Configuration files
├── shared/         # Shared DTOs, models, and configuration
│   └── ...         # Shared code between frontend and backend
├── .gitignore
└── README.md
```

## Getting Started

### Frontend Development

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Development

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Start the development server:
   ```bash
   dotnet run
   ```

The API will be available at `http://localhost:5299`. Available endpoints:

- `GET /health` - Health check endpoint
- `GET /api/stories` - Get all stories
- `POST /api/stories` - Create a new story
- `GET /api/stories/{id}` - Get a story by ID

You can test the API using the included HTTP files in the `backend/http` directory or by visiting the Swagger documentation at `http://localhost:5299/swagger` when running in development mode.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
