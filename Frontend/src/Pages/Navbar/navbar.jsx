import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/projects">Project Challenges</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;