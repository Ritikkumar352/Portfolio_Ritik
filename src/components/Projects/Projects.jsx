import React, { useState } from 'react';
import './ProjectGrid.css'; // Create this CSS file for styling

const ProjectGrid = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleReadMore = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="grid-container">
      {projects.map((project) => (
        <div key={project.id} className={`project ${expandedProject === project.id ? 'expanded' : ''}`}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <p>{project.description}</p>
              <button onClick={() => handleReadMore(project.id)}>Read More</button>
            </div>
          </div>
          {expandedProject === project.id && (
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;