import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/navbar'
import Home from './components/home/Home'
import Courses from './components/Courses/courses';
import About from './components/About/About'
import Contact from './components/contact/Contact';
import Careers from './components/career/career'
import Projects from './components/project/Projects'
import Footer from './components/home/Footer'
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;