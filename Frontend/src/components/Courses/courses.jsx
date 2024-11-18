import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './courses.css'

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Course/getCourse') // Replace with your API endpoint
      .then(response => {
        setCourses(response.data); // Assuming response data is an array of courses
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <section id="courses">
      <h2>Our Courses</h2>
      <div className='container'>
        <div className='card1'>
          {courses.map(course => (
            <div key={course.id} className='card'>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Duration: {course.duration}</p>
              <p>Price: {course.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;




