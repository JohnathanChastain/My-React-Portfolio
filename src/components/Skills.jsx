import 'react';
import '../styles/skills.css';

const skills = {
  frontend: ['React', 'Redux', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['Node.js', 'Express', 'SQL', 'MongoDB'],
  tools: ['Git', 'Docker', 'Webpack', 'Babel']
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Front-End</h3>
            <ul>
              {skills.frontend.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Back-End</h3>
            <ul>
              {skills.backend.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              {skills.tools.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
