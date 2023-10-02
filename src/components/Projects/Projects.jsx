import React from "react";
import { projectsData } from "../../assets/projectsData";
// import FooterLink from '../FooterLink/FooterLink';
import Header from "../Header/Header";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section-container-projects">
      <Header
        className="header-component"
        heading="My Projects."
        details="Here are a few cool things I've worked on, do check them out!"
      />

      <div className="project-cards-container">
        {projectsData.map(
          ({ projectName, projectDescription, imageUrl, projectUrl }) => {
            return (
              <ProjectCard
                projectName={projectName}
                projectDescription={projectDescription}
                projectUrl={projectUrl}
                imageUrl={imageUrl}
              />
            );
          }
        )}
      </div>

      {/* <FooterLink
                phrase='Check out '
                link='my skills!'
                toAddress='/skills'
            /> */}
    </section>
  );
};

export default Projects;
