import React from 'react';
import MidhunImage from '../Midhun.jpeg'; // Import your photo
import '../index.css';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
        <div className="hero-image">
            <img 
              src={MidhunImage} // Use imported image
              alt="Midhun P"
              className="profile-photo"
            />
          </div>
          <div className="hero-text">
            <h1>Software Developer</h1>
            <p>Building innovative solutions with modern technologies</p>
            <button className="cta-button" onClick={scrollToProjects}>
              View My Work
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;