import 'react';
import '../styles/projects.css';

const projects = [
  {
    name: 'Project One',
    description: 'This is a web app that allows users to manage tasks efficiently.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'http://example.com',
    codeLink: 'http://github.com/example'
  },
  {
    name: 'Project Two',
    description: 'A mobile app that tracks fitness activities and provides analytics.',
    technologies: ['React Native', 'Firebase'],
    demoLink: 'http://example.com',
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
