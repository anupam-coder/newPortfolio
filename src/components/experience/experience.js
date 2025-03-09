import React from "react";
import "./experience.css";
import Header from "../Header/Header";

const experiences = [
  {
    company: "OpenText",
    role: "Senior Software Engineer",
    date: "Present Day",
    side: "right",
  },
  {
    company: "Accenture",
    role: "Application Development Senior Analyst",
    date: "Sept 2021 - June 2023",
    side: "left",
  },
  {
    company: "Wipro",
    role: "Associate Consultant",
    date: "Nov 2017 - Sept 2021",
    side: "right",
  },
];

const Timeline = () => {
  return (
    <section className="section-container-experience" id="Experience">
      <Header heading="My Experience" details="" />
      <div className="timeline-container">
        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.side}`}>
              <div className="timeline-content">
                <h2>{exp.company}</h2>
                <p>{exp.role}</p>
                <span className="date">{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
