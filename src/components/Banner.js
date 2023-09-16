import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import backgroundH from "../assets/img/spaceship.jpg";
import headerImg from "../assets/img/header-img.svg";
// import headerImg from "../assets/img/developer-01-whoooa.gif";
import developerImg from "../assets/img/animation_300_lbksoxeq.gif";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.css";
import { ParticlesBackground } from "../ParticlesBackground";
import TypewriterComponent from "typewriter-effect";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Node Runner", "Crypto Enthusiast"];
  const period = 2000;
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="banner"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
      }}
      id="home"
    >
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">{date}</span> */}
                  <h1>{`Hello World! I'm Anupam Patra ⚡`} </h1>
                  {/* <h4>
                    & I'm a Front end developer.<span id="typing"></span>
                  </h4> */}
                  <h4>
                    <TypewriterComponent
                      options={{
                        strings: [
                          "& I'm a Front end developer😊",
                          "Part time Quiz Master!😄",
                          "& I love to write blogs",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 30,
                      }}
                    />
                  </h4>
                  <br></br>
                  <img
                    className="dev_img"
                    src={developerImg}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img className="head_img" src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
