import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit'; // Added missing import
import MidhunImage from '../Midhun.jpeg';
import '../index.css';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src={MidhunImage} 
              alt="Midhun P - Web Developer"
              className="profile-photo"
            />
          </div>
          
          <div className="hero-text">
            <h1>Hi, I'm Midhun</h1>
            <h3>Web Developer</h3>
            <p>Building innovative solutions with modern technologies</p>
            
            <button 
              className="cta-button" 
              onClick={scrollToProjects}
              aria-label="View my work"
            >
              View My Work
            </button>
          </div>
        </div>
        
        <MDBIcon fas icon="angle-double-down" className="scroll-indicator" />
      </div>
    </section>
  );
};

export default Hero;