import React from "react";
import "./Skills.css";
import skillsVector from "../../assets/img/skills_vector.png";
import Header from "../Header/Header";
import SkillCard from "./SkillCard";
import { skillList } from "../../assets/skillsData";
import backgroundH from "../../assets/img/planet_mountains.jpg";

const Skills = () => {
  return (
    <section
      className="section-container-skills"
      style={{
        backgroundImage: `url(${backgroundH})`,
        height: "100vh",
      }}
      id="skills"
    >
      <div className="overlay"></div>{" "}
      {/* Dark overlay to enhance text readability */}
      <Header
        heading="My Skills"
        details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
      />
      <div className="skill-card-container">
        {skillList.map((skill) => (
          <SkillCard
            key={skill.skillName}
            skillName={skill.skillName}
            skillUrl={skill.skillUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
