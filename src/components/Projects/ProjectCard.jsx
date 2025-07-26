import React from "react";
import "./Projects.css";

const ProjectCard = ({
  projectName,
  projectDescription,
  imageUrl,
  projectUrl,
  className,
}) => {
  return (
    <div className={`project-card ${className}`}>
      <div className="image-container">
        <a
          className="project-external-link"
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imageUrl} alt={projectName} className="project-image" />
        </a>
      </div>
      <div className="project-details-container">
        <h2 className="project-heading">{projectName}</h2>
        <p className="project-details">{projectDescription}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-button"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
