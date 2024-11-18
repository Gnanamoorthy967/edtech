import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectChallenges = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Project-challenge/getproject') // Replace with your API endpoint
      .then(response => {
        setProjects(response.data); // Assuming response data is an array of projects
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <section id="projects">
      <h2>Project Challenges</h2>
      <div className='container'>
        {projects.map(project => (
          <div key={project.id} className='card'>
            <h3>{project.challengeName}</h3>
            <p>{project.description}</p>
            <p className='btn1'>{project.status}</p>
            <p>{project.deadline}</p>
            <p>{project.prizes}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectChallenges;
