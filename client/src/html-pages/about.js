import React from "react";
import "../css/about.css";
import janelle from "../images/Janelle.jpg";
import david from "../images/David.png";
import kyrill from "../images/Kyrill.jpg";
import ralph from "../images/Ralph.png";
import { Container, Row, Col, Image } from "react-bootstrap";

const crew = {
  rk: {
    name: "Ralph Kilian",
    message: "Old Dog",
  },
  km: {
    name: "Kyrill Metalnikov",
    message: "Boss Man",
  },
  dh: {
    name: "David Han",
    message: "The Mentor",
  },
  jk: {
    name: "Janelle Kwok",
    message: "Queen Bee",
  },
};

const about = () => {
  return (
    <div>
      <Container fluid className="about-box">
        <Container>
          <div className="header container ">
            <p className="about-header-title">Out-of-Line</p>
            <hr />
            <p className="about-header-text">
              <span className="OoF">Out-of-Line</span> is a diverse and dynamic
              team of students with a desire to make the world a better place.
              With this application we intend to make a significant improvement
              to the shopping experience during these difficult times.
              <br />
              <br />
              <span className="OoF">Out-of-Line</span> will improve the
              effectiveness of social distancing by implementing an effecient
              well-managed queueing system, designed to minimize waiting times
              and limit the extent of physical proximity necessary to get the
              necessities you need.
              <br />
              <br />
              Need to stand in line? Do it online, with{" "}
              <span className="OoF">Out-of-Line</span>!
            </p>
          </div>
          <br />
          <br />
        </Container>

        <Row>
          <Col sm></Col>
          <Col sm>
            <div className="container-1">
              <Image className="crew-image" src={kyrill} roundedCircle fluid />
              <div className="overlay">
                <div className="text">
                  <p>{crew.km.name}</p>
                  <hr />
                  <p>{crew.km.message}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm></Col>
        </Row>
        <Row>
          <Col sm>
            <div className="container-1">
              <Image className="crew-image" src={ralph} roundedCircle fluid />
              <div className="overlay">
                <div className="text">
                  <p>{crew.rk.name}</p>
                  <hr />
                  <p>{crew.rk.message}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm></Col>
          <Col sm>
            <div className="container-1">
              <Image className="crew-image" src={janelle} roundedCircle fluid />
              <div className="overlay">
                <div className="text">
                  <p>{crew.jk.name}</p>
                  <hr />
                  <p>{crew.jk.message}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm></Col>
          <Col sm>
            <div className="container-1">
              <Image className="crew-image" src={david} roundedCircle fluid />
              <div className="overlay">
                <div className="text">
                  <p>{crew.dh.name}</p>
                  <hr />
                  <p>{crew.dh.message}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm></Col>
        </Row>
      </Container>
    </div>
  );
};

export default about;
