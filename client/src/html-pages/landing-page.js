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
  ListGroup,
  ListGroupItem,
} from "reactstrap";

class LandingPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <div>
          <Jumbotron className="shadow ">
            <h1 className="display-3">Out-of-Line</h1>
            <p className="lead">Need to wait in line? Do it online!</p>
            <hr className="my-2"/>
            <p>
              Virtually queue at your favourite or local grocery store and take
              your social distancing to a whole new level while simultaneously
              increasing the efficiency of getting what you need.
            </p>
          </Jumbotron>
        </div>
        <CardGroup className="card-group shadow">
          <Card className="shadow">
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
          <Card className="shadow">
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
                <ListGroup flush>
                  <ListGroupItem>Estimated wait times</ListGroupItem>
                  <ListGroupItem>
                    Number of people currently in line
                  </ListGroupItem>
                  <ListGroupItem>Health & Safety Information</ListGroupItem>
                  <ListGroupItem>Contact Information & Directions</ListGroupItem>
                </ListGroup>
                Place yourself in line at the store you choose by hitting the{" "}
                <strong>"Queue"</strong> button.
              </CardText>
            </CardBody>
          </Card>
          <Card className="shadow">
            <CardImg
              top
              width="100%"
              src="/images/map-3.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle><strong>Virtual Queue</strong></CardTitle>
              <CardText>
                Track your position in line and get notified when it is your turn
                to enter the store.
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    );
  }
};

export default LandingPage;
