import React from "react";
import "./About.css";
import backgroundH from "../assets/img/White_Brick.jpg";
import aboutAnime from "../assets/img/about_anime.gif";
import Header from "./Header/Header";
import Experience from "./experience/experience";

export const About = () => {
  return (
    <section
      className="section-container"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
        height: "110vh",
      }}
      id="about"
    >
      <Header heading="About Me" details="" />
      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">Who I Am</h3>
          <p className="about-details">
            With over 7 years of experience in web development, I specialize in
            frontend technologies and have exposure to backend development.
            Proficient in designing and developing web applications using the
            latest technologies, I prioritize quality code. I excel in UI
            fundamentals and can quickly adapt to various frontend frameworks.
            <br />
            <a
              className="about-link-element"
              href="https://www.linkedin.com/in/anupam-patra-921634ab/"
            >
              Connect with me on LinkedIn
            </a>
          </p>

          {/* Sub section 2 */}
          <h3 className="about-sub-head">Education</h3>
          <p className="about-details">
            Originally from Bhubaneswar, Odisha, I completed my bachelor's
            degree in Electronics and Telecommunication Engineering from VSSUT,
            Burla. I have also successfully qualified GATE 2019 and 2020.
          </p>
          {/* Sub section 3 */}
          <h3 className="about-sub-head">Interests and Hobbies</h3>
          <p className="about-details">
            My interests lie in Full Stack Development and System Design.
            Outside of work, I enjoy playing Football, Volleyball, and
            occasionally indulge in e-sports. I have a penchant for historical,
            mythological, and thriller novels, and I also enjoy hosting quizzes
            in my spare time.
          </p>
          <h3 className="about-sub-head">Want to Learn with Me?</h3>
          <p className="about-details">
            Join me on the journey of unraveling the secrets of Software
            Engineering. 🧙‍♂️ Crafting code potions & unraveling the mysteries of
            technology. 🚀 Join me in the quest! ✨
            <ul className="about-links">
              <li>
                <a
                  className="about-link-element"
                  href="https://github.com/anupam-coder/developer-practice"
                >
                  Explore my GitHub repository
                </a>
              </li>
              <li>
                <a
                  className="about-link-element"
                  href="https://www.instagram.com/code_alchemy_wizard/"
                >
                  Follow my journey on Instagram
                </a>
              </li>
            </ul>
          </p>
        </div>

        <div className="about-main-right">
          <img className="about-anime" src={aboutAnime} alt="about" />
        </div>
      </div>
    </section>
  );
};
