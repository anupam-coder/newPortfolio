import React from "react";
import experienceStyles from "./experience.styles";
import { ReactComponent as CompanyIcon } from "../../assets/company/company.svg";
import FractalLogo from "../../assets/company/wipro-logo.png";
import accentureLogo from "../../assets/company/accenture-logo.png";
import opentextLogo from "../../assets/company/ot_logo.png";
import Header from "../Header/Header";

const Experience = () => {
  const classes = experienceStyles();
  return (
    <section
      id="experience"
      className={`${classes.experienceContainer} container`}
    >
      <Header heading="Professional Experience" details="" />
      <div className={classes.expBlock}>
        <div className={classes.expBlockRight}></div>
        <span
          className={`${classes.expBlockSeperator} ${classes.expBlockSeperatorFirst}`}
        >
          <span className={classes.presentDayTag}>Present Day</span>
          <span className={`hide-md ${classes.expYearTagLeft}`}>June 2023</span>
          {/* <span className={`hide-sm ${classes.expYearTagRight}`}>Feb 2019</span> */}
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <img src={opentextLogo} alt="OpenText-logo"></img>
            </div>
            <div className={classes.companyName}>OpenText</div>
            <div className={classes.role}>Senior Software Engineer</div>
          </div>
        </div>
      </div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-md">
            <div className={classes.companyLogo}>
              <img src={accentureLogo} alt="Accenture-logo"></img>
            </div>
            <div className={classes.companyName}>Accenture</div>
            <div className={classes.role}>
              Application Development Senior Analyst
            </div>
          </div>
        </div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagRight}>Sept 2021</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-sm">
            <div className={classes.companyLogo}></div>
          </div>
        </div>
      </div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-md">
            <div className={classes.companyLogo}>
              <img src={FractalLogo} alt="Fractal-Logo"></img>
            </div>
            <div className={classes.companyName}>Wipro</div>
            <div className={classes.role}>Associate Consultant</div>
          </div>
        </div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagRight}>Nov 2017</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-sm">
            <div className={classes.companyLogo}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
