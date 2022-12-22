import React from "react";
import "./About.css";
import backgroundH from "../assets/img/White_Brick.jpg";
import aboutAnime from "../assets/img/about_anime.gif";
import Header from "./Header/Header";
import Experience from "./experience/experience";
// import FooterLink from '../FooterLink/FooterLink';

export const About = () => {
  return (
    <section
      className="section-container"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
        // backgroundSize: "cover",
        height: "110vh",
      }}
      id="about"
    >
      <Header heading="About Me." details="" />
      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">Who I am</h3>
          <p className="about-details">
            I am a web developer with 4+ years of experience having expertise in
            frontend and exposure to backend. I can design & develop web apps
            using the latest technologies to deliver the product with quality
            code. I am very good at UI fundamentals & technologies and can adapt
            to most of the frontend frameworks quickly.
            <br />
            <a
              className="about-link-element"
              href="https://www.linkedin.com/in/anupam-patra-921634ab/"
            >
              Feel free to connect with me in LinkedIn
            </a>
          </p>

          {/* Sub section 2 */}
          <h3 className="about-sub-head">Education</h3>
          <p className="about-details">
            I'm from Odisha's Capital city Bhubaneswar, I have completed my
            bachelor's degree in Electronics and Telecommunication Engineering
            From VSSUT,Burla. I have also qualified GATE 2019 and 2020.
          </p>
          {/* Sub section 3 */}
          <h3 className="about-sub-head">Interests and Hobbies</h3>
          <p className="about-details">
            I have interest in Full Stack Developement and System Design. Apart
            from this I love playing Football, Volleyball and sometimes e-sports
            as well. I am passionate about historical, mythological and thriller
            Novels. I am also a part time Quiz Master!.
          </p>
        </div>

        <div className="about-main-right">
          <img className="about-anime" src={aboutAnime} alt="about" />
        </div>
      </div>
    </section>
  );
};
