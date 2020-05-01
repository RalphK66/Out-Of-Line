import React from "react";

import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardBody,
  Container,
  Jumbotron,
} from "reactstrap";

const LandingPage = (props) => {

  return (
    <Container>
      <div>
        <Jumbotron>
          <h1 className="display-3">Out-of-Line</h1>
          <p className="lead">Need to wait in line? Do it online!</p>
          <hr className="my-2" />
          <p>
            Virtually queue at your favourite or local grocery store and take
            your social distancing to a whole new level while simultaneously
            increasing the effeciency of getting what you need.
          </p>
        </Jumbotron>
      </div>
      <CardGroup className="card-group">
        <Card>
          <CardImg
            top
            width="100%"
            src="/images/map-1.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle><strong>Interctive Map</strong></CardTitle>
            <CardText>
              Find the grocery stores quickly and easily with this interactive
              map.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/images/map-2.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle><strong>Grocery Store Info</strong></CardTitle>
            <CardText>
              Clicking on a grocery store will display that store's relevant
              information, including:
              <ul>
                <li>Estimated wait times</li>
                <li>Number of people currently in line</li>
                <li>Health & Safety Information</li>
                <li>Contact Information & Directions</li>
              </ul>
              Place yourself in line at the store you choose by hitting the{" "}
              <strong>"Queue"</strong> button.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/images/map-3.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle><strong>Virtual Queue</strong></CardTitle>
            <CardText>
              Track your position in line and get notifed when it is your turn
              to enter the store.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default LandingPage;
