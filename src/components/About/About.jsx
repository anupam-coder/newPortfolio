import React from "react";
import "./About.css";
import aboutVector from "../../assets/img/about_anime.gif";
import avatarImg from "../../assets/img/Anupam-pic.jpg"; // optional, for personal touch

const About = () => (
  <section className="section-container about-section" id="about">
    <div className="about-bg-blobs" />
    <div className="about-main">
      <div className="about-main-left glassy-effect">
        <div className="about-avatar-frame">
          <img src={avatarImg} alt="Your Avatar" className="about-avatar" />
        </div>
        <h1 className="about-head">
          Hi, I'm <span className="about-name-pop">Anupam Patra</span> 👋
        </h1>
        <h2 className="about-sub-head">
          Senior Software Engineer & UI Specialist
        </h2>
        <p className="about-details">
          With over <b>7 years</b> of web development experience, I specialize
          in frontend technologies and have robust exposure to backend stacks.
          My focus: <b>delivering high-quality, scalable web applications</b>{" "}
          with clean, maintainable code.
          <br />
          <br />
          <span className="about-bullet">•</span> Passionate about{" "}
          <b>UI architecture</b>, <b>system design</b>, and emerging frameworks.
          <br />
          <span className="about-bullet">•</span> Fast learner, creative problem
          solver, and a lifelong student of technology.
          <br />
          <br />
          <span className="about-link-element">
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" /> Connect with me on LinkedIn
            </a>
          </span>
        </p>
        <div className="about-facts">
          <span>📍 Bhubaneswar, Odisha</span>
          <span>🎓 VSSUT, Burla — B.Tech ECE</span>
          <span>🏆 GATE 2019 & 2020 Qualifier</span>
        </div>
        <div className="about-extra-interests">
          <b>Interests:</b> Full Stack Dev, System Design, Football, Volleyball,
          E-sports,
          <br /> History, Mythology, Thriller Novels, Quiz Hosting.
        </div>
      </div>
      <div className="about-main-right">
        <img
          src={aboutVector}
          alt="About section illustration"
          className="about-vector"
        />
      </div>
    </div>
  </section>
);

export default About;
