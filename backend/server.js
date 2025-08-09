const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Portfolio data
const portfolioData = {
  message: "Welcome to Rafael Marquez's Full Stack Portfolio!",
  skills: [
    'React.js',
    'Node.js',
    'Express.js',
    'JavaScript',
    'TypeScript',
    'MongoDB',
    'PostgreSQL',
    'Python',
    'Django',
    'FastAPI',
    'AWS',
    'Arduino',
    'Raspberry Pi'
  ],
  projects: [
    {
      id: 1,
      name: 'Portfolio Web Application',
      description: 'Full-stack web application built with React.js and Node.js',
      technologies: ['React.js', 'Node.js', 'Express.js']
    },
    {
      id: 2,
      name: 'IoT Security Solutions',
      description: 'Electronic security systems with IoT integration',
      technologies: ['Arduino', 'Raspberry Pi', 'C++', 'Python']
    }
  ],
  contact: {
    email: 'rafael.marquez2409@gmail.com',
    location: 'Guayaquil, Ecuador',
    github: 'https://github.com/kmarquez24',
    linkedin: 'https://www.linkedin.com/in/rafael-marquez-1206b42a5'
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Rafael Marquez Portfolio API',
    version: '1.0.0',
    endpoints: {
      portfolio: '/api/portfolio',
      skills: '/api/skills',
      projects: '/api/projects',
      contact: '/api/contact'
    }
  });
});

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/skills', (req, res) => {
  res.json({
    skills: portfolioData.skills
  });
});

app.get('/api/projects', (req, res) => {
  res.json({
    projects: portfolioData.projects
  });
});

app.get('/api/contact', (req, res) => {
  res.json({
    contact: portfolioData.contact
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The requested endpoint does not exist'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 API endpoints available at http://localhost:${PORT}`);
  console.log(`🏠 Portfolio data: http://localhost:${PORT}/api/portfolio`);
});