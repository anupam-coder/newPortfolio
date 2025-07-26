import React from "react";
import "./experience.css";
import Header from "../Header/Header";
import otLogo from "../../assets/company/ot_logo.png";
import accentureLogo from "../../assets/company/accenture-logo.png";
import wiproLogo from "../../assets/company/wipro-logo.png";
import LBG from "../../assets/company/LBG.gif";

const experiences = [
  {
    company: "Lloyds Technology Centre India",
    role: "Senior Software Engineer",
    date: "June 2025 - Present",
    side: "right",
    logo: LBG,
    description: `Current role at Lloyds Banking Group — shaping seamless, scalable banking experiences by building performant web solutions, optimizing systems, and collaborating across teams for robust deliveries.`,
  },
  {
    company: "OpenText",
    role: "Senior Software Engineer",
    date: "June 2023 - June 2025",
    side: "left",
    logo: otLogo,
    description: `• Introduced a widget search view, improving widget discovery and customized landing page creation, boosting customer satisfaction by 30%.
• Implemented versioning logic for accurate release management and tracking.
• Developed backend REST APIs in Oscript for admin landing page perspectives, improving data filtering and query efficiency.`,
  },
  {
    company: "Accenture",
    role: "Application Development Senior Analyst",
    date: "Sept 2021 - June 2023",
    side: "right",
    logo: accentureLogo,
    description: `• Reduced transaction verification time by 50%—built fraud/exception review tools for Goldman Sachs agents.
• Developed comprehensive UI for UK Government, cutting onboarding time by 40% and boosting user satisfaction 25%.
• Engineered an in-house React file upload system integrated with Azure Blob Storage.`,
  },
  {
    company: "Wipro Digital",
    role: "Associate Consultant / Project Engineer",
    date: "Nov 2017 - Sept 2021",
    side: "left",
    logo: wiproLogo,
    description: `• Expanded business in ASEAN by building multi-language landing pages and unique partner features, raising engagement by 15%.
• Led UI development for CRM/client onboarding and optimized Angular apps with lazy loading for performance improvement.`,
  },
];

const Timeline = () => {
  return (
    <section className="section-container-experience" id="experience">
      <Header heading="My Experience" details="" />
      <div className="timeline-container">
        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item glass ${exp.side} fade-in`}
              style={{ animationDelay: `${index * 160}ms` }}
            >
              <div className="timeline-icon">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company + " logo"} />
                ) : (
                  <span className="company-initial">
                    {exp.company.charAt(0)}
                  </span>
                )}
              </div>
              <div className="timeline-content">
                <h2>
                  <span className="company-name">{exp.company}</span>
                </h2>
                <p className="role">
                  <span className="role-chip">{exp.role}</span>
                </p>
                <span className="date">{exp.date}</span>
                <div className="exp-description">
                  {exp.description.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
