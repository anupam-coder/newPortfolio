import React from "react";
import "./Skills.css";
import skillsVector from "../../assets/img/skills_vector.png";
import Header from "../Header/Header";
import SkillCard from "./SkillCard";
import { skillList } from "../../assets/skillsData";
import backgroundH from "../../assets/img/planet_mountains.jpg";
// import FooterLink from '../FooterLink/FooterLink';

const Skills = () => {
  return (
    <section
      className="section-container-skills"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
        // backgroundSize: "cover",
        height: "110vh",
      }}
      id="skills"
    >
      <Header
        heading="My Skills."
        details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
      />
      <div className="skill-card-container">
        {skillList.map((skill) => (
          <SkillCard skillName={skill.skillName} skillUrl={skill.skillUrl} />
        ))}
      </div>
      {/* <FooterLink phrase='Get in ' link='touch.' toAddress='/contact' /> */}
      <div className="skills-vector-frame">
        <img className="skills-vector" src={skillsVector} alt="" />
      </div>
    </section>
  );
};

export default Skills;
