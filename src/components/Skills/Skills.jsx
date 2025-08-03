import React from "react";
import "./Skills.css";
import skillsVector from "../../assets/img/skills_vector.png";
import Header from "../Header/Header";
import SkillCard from "./SkillCard";
import { skillList } from "../../assets/skillsData";
import backgroundH from "../../assets/img/planet_mountains.jpg";

const Skills = () => (
  <section
    className="section-container-skills"
    id="skills"
    style={{ backgroundImage: `url(${backgroundH})` }}
  >
    <div className="overlay" />
    <Header
      heading="Skills"
      details="Here are some tools & technologies I excel at:"
      className="skils_header"
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
    <div className="skills-vector-frame">
      <img
        src={skillsVector}
        alt="Skills illustration"
        className="skills-vector"
      />
    </div>
  </section>
);

export default Skills;
