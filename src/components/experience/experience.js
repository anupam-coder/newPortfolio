import React from "react";
import experienceStyles from "./experience.styles";
import { ReactComponent as CompanyIcon } from "../../assets/company/company.svg";
import FractalLogo from "../../assets/company/wipro-logo.png";
import accentureLogo from "../../assets/company/accenture-logo.png";
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
        <div className={classes.expBlockLeft}></div>
        <span
          className={`${classes.expBlockSeperator} ${classes.expBlockSeperatorFirst}`}
        >
          <span className={classes.presentDayTag}>Present Day</span>
          <span className={`hide-md ${classes.expYearTagLeft}`}>Sept 2021</span>
          {/* <span className={`hide-sm ${classes.expYearTagRight}`}>Feb 2019</span> */}
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <img src={accentureLogo} alt="Fractal-Logo"></img>
            </div>
            <div className={classes.companyName}>Accenture</div>
            <div className={classes.role}>Frontend Engineer</div>
          </div>
        </div>
      </div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}>
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
