import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './career.css'

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Career/getCareer') // Replace with your API endpoint
      .then(response => {
        setJobs(response.data); // Assuming response data is an array of jobs
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <section id="careers">
      <h2>Careers</h2>
      <div className='container'>
        {jobs.map(job => (
          <div key={job.id} className='card'>
            <h3>{job.position}</h3>
            <p>{job.description}</p>
            <p>{job.requirements}</p>
            <p>{job.location}</p>
            <a href={job.applyLink} className='btn1'>Apply Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Careers;
