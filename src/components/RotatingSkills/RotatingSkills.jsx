import React from "react";
import "./RotatingSkills.css";
import { skillsFrontend, skillsBackend, skillsOthers } from "./skillsData";
import SemiRotatingArc from "./SemiRotatingArc.jsx"; // defined in the same folder
import Header from "../Header/Header.jsx";

const categories = [
  { label: "Frontend", data: skillsFrontend },
  { label: "Backend", data: skillsBackend },
  { label: "Others", data: skillsOthers },
];

export default function RotatingSkills() {
  return (
    <section className="rotating-skills-section" id="skills">
      <Header
        heading="Skills"
        details="Here are some tools & technologies I excel at:"
        className="skils_header"
      />
      <div className="rotating-skills-row">
        {categories.map(({ label, data }) => (
          <div className="rotating-skills-block" key={label}>
            <SemiRotatingArc skills={data} label={label} />
          </div>
        ))}
      </div>
    </section>
  );
}
