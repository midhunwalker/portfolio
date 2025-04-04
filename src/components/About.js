import React from 'react';
import '../index.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Full-Stack Developer | MERN Specialist</h3>
            <p className="about-paragraph">
              A passionate full-stack developer with expertise in modern web technologies, 
              I specialize in crafting robust digital solutions using the MERN stack 
              (MongoDB, Express.js, React.js, Node.js). Based in Kerala, India, 
              I bring a unique blend of technical proficiency and creative problem-solving 
              to every project.
            </p>
            
            <p className="about-paragraph">
              My development philosophy centers on creating scalable architectures 
              while maintaining clean, efficient code. With comprehensive experience 
              in both front-end and back-end systems, I excel at transforming complex 
              requirements into intuitive user experiences.
            </p>

            <p className="about-paragraph">
              Currently seeking challenging opportunities to contribute my skills in:
            </p>
            <ul className="skills-list">
              <li>Full-stack application development</li>
              <li>RESTful API design and integration</li>
              <li>Responsive UI/UX implementation</li>
              <li>Performance optimization strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;