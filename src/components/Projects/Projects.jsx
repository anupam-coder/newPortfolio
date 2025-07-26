import React, { useState, useEffect } from "react";
import { projectsData } from "../../assets/projectsData";
import Header from "../Header/Header";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const getProjectAt = (offset) => {
    const index =
      (currentIndex + offset + projectsData.length) % projectsData.length;
    return projectsData[index];
  };

  const displayCards = [
    { ...getProjectAt(-1), className: "prev" },
    { ...getProjectAt(0), className: "active" },
    { ...getProjectAt(1), className: "next" },
  ];

  return (
    <section className="section-container-projects" id="projects">
      <div className="particles-overlay" />
      <Header heading="Projects" details="" />
      <div className="project-cards-container">
        {displayCards.map((project, index) => (
          <ProjectCard key={project.projectName || index} {...project} />
        ))}
      </div>
      {/* Navigation Buttons BELOW the carousel */}
      <div className="carousel-arrows bottom-center">
        <button
          className="carousel-arrow"
          onClick={handlePrev}
          aria-label="Previous Project"
        >
          <FaChevronLeft />
        </button>
        <button
          className="carousel-arrow"
          onClick={handleNext}
          aria-label="Next Project"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
