import React, { useState } from 'react';
import './contact.css' // Import the new CSS file

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setSuccessMessage('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section className="contact-container">
      <h2>Contact Us</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
