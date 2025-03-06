import React from "react";
import "./Skills.css";

const SkillCard = ({ skillName, skillUrl }) => {
  return (
    <div className="skill">
      <div className="skill-icon">
        <img src={skillUrl} alt={skillName} />
      </div>
      <p>{skillName}</p>
    </div>
  );
};

export default SkillCard;
