# Node.js Backend API

A RESTful API server built with Node.js and Express.js serving portfolio data for Rafael Marquez's professional profile.

## Features

- **Express.js** - Fast, minimalist web framework
- **CORS Support** - Cross-origin resource sharing enabled
- **RESTful API** - Clean API endpoints
- **Error Handling** - Comprehensive error middleware
- **Health Checks** - System monitoring endpoints
- **JSON Responses** - Structured data format

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
cd backend
npm install
```

### Running the Server

```bash
npm start
```

The server will be available at `http://localhost:5000`

## API Endpoints

### Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information and available endpoints |
| GET | `/api/portfolio` | Complete portfolio data |
| GET | `/api/skills` | Technical skills list |
| GET | `/api/projects` | Project portfolio |
| GET | `/api/contact` | Contact information |
| GET | `/health` | Server health check |

### Example Responses

#### Portfolio Data (`/api/portfolio`)
```json
{
  "message": "Welcome to Rafael Marquez's Full Stack Portfolio!",
  "skills": ["React.js", "Node.js", "Express.js", "..."],
  "projects": [
    {
      "id": 1,
      "name": "Portfolio Web Application",
      "description": "Full-stack web application built with React.js and Node.js",
      "technologies": ["React.js", "Node.js", "Express.js"]
    }
  ],
  "contact": {
    "email": "rafael.marquez2409@gmail.com",
    "location": "Guayaquil, Ecuador"
  }
}
```

## Project Structure

```
backend/
├── server.js           # Main Express server
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Technologies Used

- Node.js
- Express.js
- CORS middleware
- JSON data handling

## Development

### Error Handling

The API includes comprehensive error handling:

- 404 errors for unknown routes
- 500 errors for server issues
- Structured error responses

### Health Monitoring

Access `/health` endpoint to check server status:

```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
```