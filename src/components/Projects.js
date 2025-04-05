import React from 'react';
import '../index.css';

const Projects = () => {
  const projects = [
    { 
      title: 'Portfolio Website', 
      description: 'Personal portfolio built with React.js',
      image: 'MidhunPorfolioWebsite.png',
      demoLink: '#',
      codeLink: 'https://github.com/midhunwalker/portfolio.git'
    },
    { 
      title: 'SupplyCo Website', 
      description: 'A user-friendly platform connecting customers with SupplyCo shops',
      image: 'Supplycowebsite.png',
      demoLink: '#',
      codeLink: 'https://github.com/midhunwalker/Supplyco-reactjs.git'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img 
                src={`${process.env.PUBLIC_URL}${project.image}`} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="demo-link">
                    Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noreferrer" className="code-link">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;