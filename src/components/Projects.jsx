import 'react';
import '../styles/Projects.css';

const projects = [
  {
    name: 'SkyWatch Hub',
    description: 'This is a web app that allows users to view weather forecasts by location.',
    technologies: ['Typescript', 'javascript'],
    // demoLink: 'http://example.com',
    codeLink: 'https://github.com/JohnathanChastain/SkyWatch-Hub'
  },

  {
    name: 'RideCraft Master',
    description: 'This is a command-line applications that allows users to create and manage a list of vehicles.',
    technologies: ['Typescript'],
    // demoLink: 'http://example.com',
    codeLink: 'https://github.com/JohnathanChastain/RideCraft-Master'
  },

  {
    name: 'Project Two',
    description: 'A mobile app that tracks fitness activities and provides analytics.',
    technologies: ['React Native', 'Firebase'],
    // demoLink: 'http://example.com',
    codeLink: 'http://github.com/example'
  }

];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies: </strong>{project.technologies.join(', ')}</p>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
