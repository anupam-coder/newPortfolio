import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/twitter.svg";
import navIcon2 from "../../assets/img/github.svg";
import navIcon4 from "../../assets/img/linkedin.svg";
import { HashLink } from "react-router-hash-link";
import MyResume from "../../assets/files/ap.pdf";
import "./NavBar.css";
import headerImg from "../../assets/img/header-img.svg";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={headerImg} alt="Header Img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#experience"
                className={
                  activeLink === "experience"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("experience")}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                My Projects
              </Nav.Link>
              <Nav.Link
                href="#blogs"
                className={
                  activeLink === "blogs" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("blogs")}
              >
                My Blogs
              </Nav.Link>

              <Nav.Link
                href={MyResume}
                download="AnupamPatra_UI_Dev_5+_YOE"
                className={
                  activeLink === "resume" ? "active navbar-link" : "navbar-link"
                }
                onClick={() =>
                  window.open(
                    "https://github.com/anupam-coder/newPortfolio/blob/main/src/assets/files/ap.pdf",
                    "_blank"
                  )
                }
              >
                <button id="DownloadResume">Download Resume</button>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/anupam-coder" target="_blank">
                  <img src={navIcon2} alt="Github" />
                </a>
                <a href="https://twitter.com/AnupamP31623334" target="_blank">
                  <img src={navIcon1} alt="Twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anupam-patra-921634ab/"
                  target="_blank"
                >
                  <img src={navIcon4} alt="LinkedIn" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
