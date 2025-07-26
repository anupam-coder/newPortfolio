import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/experience/experience";
import { ParticlesBackground } from "./ParticlesBackground";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
