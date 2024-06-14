import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span>Unsway!</span>
            <span className="purple"></span>
            <br />
            We Provide The Best Experience for Everyone!
           
            <br />
            Here's what we do :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Artifical Intelligence
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Enterprenuership
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Unsway</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
