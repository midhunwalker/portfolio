import React from 'react';
import '../index.css';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'Python', 'SQL', 'Git'];
  
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;