# React.js Frontend

A modern React.js application showcasing Rafael Marquez's portfolio with dynamic data fetching from a Node.js backend API.

## Features

- **React.js 19** - Latest version of React
- **Responsive Design** - Mobile-friendly interface
- **API Integration** - Fetches data from backend server
- **Modern CSS** - Clean and professional styling
- **Error Handling** - Graceful fallbacks for API failures

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
cd frontend
npm install
```

### Running the Application

```bash
npm start
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Application styles
│   ├── index.js        # React DOM entry point
│   └── index.css       # Global styles
└── package.json
```

## API Integration

The frontend communicates with the backend API at `http://localhost:5000` to fetch:

- Portfolio information
- Technical skills
- Project details
- Contact information

## Technologies Used

- React.js
- HTML5
- CSS3
- JavaScript ES6+
- Fetch API