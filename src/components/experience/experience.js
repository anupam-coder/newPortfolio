import React from "react";
import "./experience.css"; // Import CSS file with your defined classes
import { ReactComponent as CompanyIcon } from "../../assets/company/company.svg";
import FractalLogo from "../../assets/company/wipro-logo.png";
import accentureLogo from "../../assets/company/accenture-logo.png";
import opentextLogo from "../../assets/company/ot_logo.png";
import Header from "../Header/Header";

const Experience = () => {
  return (
    <section id="experience" className="experience-container container">
      <Header heading="Professional Experience" details="" />
      <div className="exp-block">
        <div className="exp-block-right"></div>
        <span className="exp-block-separator exp-block-separator-first">
          <span className="present-day-tag">Present Day</span>
          <span className="hide-md exp-year-tag-left">June 2023</span>
          {/* <span className="hide-sm exp-year-tag-right">Feb 2019</span> */}
        </span>
        <div className="exp-block-right">
          <div className="exp-block-content">
            <div className="company-logo">
              <img src={opentextLogo} alt="OpenText-logo"></img>
            </div>
            <div className="company-name">OpenText</div>
            <div className="role">Senior Software Engineer</div>
          </div>
        </div>
      </div>
      <div className="exp-block">
        <div className="exp-block-right">
          <div className="exp-block-content block-left hide-md">
            <div className="company-logo">
              <img src={accentureLogo} alt="Accenture-logo"></img>
            </div>
            <div className="company-name">Accenture</div>
            <div className="role">Application Development Senior Analyst</div>
          </div>
        </div>
        <span className="exp-block-separator">
          <span className="exp-year-tag-right">Sept 2021</span>
        </span>
        <div className="exp-block-right">
          <div className="exp-block-content hide-sm">
            <div className="company-logo"></div>
          </div>
        </div>
      </div>
      <div className="exp-block">
        <div className="exp-block-right"></div>
        <span className="exp-block-separator exp-block-separator-first">
          <span className="hide-md exp-year-tag-left">Nov 2017</span>
        </span>
        <div className="exp-block-right">
          <div className="exp-block-content hide-md">
            <div className="company-logo">
              <img src={FractalLogo} alt="Fractal-Logo"></img>
            </div>
            <div className="company-name">Wipro</div>
            <div className="role">Associate Consultant</div>
            <div className="company-logo"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
