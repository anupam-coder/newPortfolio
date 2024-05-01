import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/discord.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/twitter.svg";
import navIcon4 from "../assets/img/linkedin.svg";
import navIcon5 from "../assets/img/icons8-instagram.svg";
import developerImg from "../assets/img/developer-01-whoooa.gif";
import "animate.css";
import Wave from "react-wavify";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="dev_img">
            <img src={developerImg} alt="Header Img" />
          </div>
          <div className="social-icon footer-icon">
            <a href="https://github.com/anupam-coder" target="_blank">
              <img src={navIcon2} alt="Github" />
            </a>
            <a href="https://twitter.com/AnupamP31623334" target="_blank">
              <img src={navIcon3} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/anupam-patra-921634ab/"
              target="_blank"
            >
              <img src={navIcon4} alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/code_alchemy_wizard/"
              target="_blank"
            >
              <img src={navIcon5} alt="Instagram" />
            </a>
            <br />
            <div id="footer_text">
              <p>Made with ❤️ by Anupam Patra</p>
            </div>
          </div>
        </div>
        <Wave
          fill="#00bfff"
          paused={false}
          options={{
            height: 40,
            amplitude: 30,
            speed: 0.35,
            points: 5,
          }}
        />
      </footer>
    </>
  );
};
