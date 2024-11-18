import React from 'react';
import arrow from '../../Assets/dark-arrow.png'

import './home.css'

function Home() {
  const handleEmailClick = () => {
    const email = 'gnanamoorthy967@gmail.com';
    const subject = 'Your Subject Here'; // Optional
    const body = 'Your message body here'; // Optional
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className='container2'>
        <section className='c2'>
          <h1>Welcome to EdTech Platform</h1>
          <p>At EdTech Platform, we provide innovative online learning experiences that empower students and professionals to achieve their goals.</p>
          <button className='btn' onClick={handleEmailClick}>Touch with us <img src={arrow} ></img></button>
        </section>
      </div>


    </div>
  );
}

export default Home;