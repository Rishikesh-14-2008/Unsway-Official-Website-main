import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US  INTRODUCE OURSELVES
            </h1>
            <p className="home-about-body">
            Guiding students beyond stereotypes in course choices. From personalized mentoring to robust skill-building,
              <br />
              <br /> we've got it all covered!
              <br />
              <br />
              <i>
                <b> AI, Enterprenuership, Coding, Public Speaking and Vocabulary, Finance</b>
              </i>
              <br />
              <br />
              &nbsp;
              <i>
                <b className="white"></b> 
                {" "}
                <b className="white">
                  
                </b>
              </i>
              <br />
              <br />
              
              <i>
                <b className="white">
                  {" "}
                  
                </b>
              </i>
              &nbsp; 
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/unsway/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/unswayy?igsh=MTl4dmYwcmg0NmxmZQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
