import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/portfolio');
        const data = await response.json();
        setMessage(data.message);
        setSkills(data.skills);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Welcome to Rafael Marquez Portfolio');
        setSkills(['React.js', 'Node.js', 'Express', 'JavaScript', 'TypeScript']);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rafael Marquez</h1>
        <h2>Full Stack Web Developer</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>{message}</p>
            <div className="skills-section">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="projects-section">
              <h3>Projects</h3>
              <p>This portfolio demonstrates React.js frontend communicating with a Node.js backend API.</p>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;