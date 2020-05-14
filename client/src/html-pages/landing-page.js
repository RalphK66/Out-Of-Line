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
import map_1 from "../images/map-1.png";
import map_2 from "../images/map-2.png";
import map_3 from "../images/map-3.png";
import "../css/landing-page.css"

class LandingPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <div>
          <Jumbotron className="shadow landing-jumbo">
            <h1 className="display-3">Out-of-Line</h1>
            <p className="lead">Need to wait in line? Do it online!</p>
            <hr />
            <p>
              Virtually queue at your favourite or local grocery store and take
              your social distancing to a whole new level while simultaneously
              increasing the efficiency of getting what you need.
            </p>
          </Jumbotron>
        </div>
        <CardGroup className="landing-card-group shadow">
          <Card className="shadow landing-card">
            <CardImg
              top
              width="100%"
              src={map_1}
              alt="Card image cap"
              className = "landing-card-img-top"
            />
            <CardBody>
              <CardTitle><strong>Interactive Map</strong></CardTitle>
              <CardText>
                Find the grocery stores quickly and easily with this interactive
                map.
              </CardText>
            </CardBody>
          </Card>
          <Card className="shadow landing-card">
            <CardImg
              top
              width="100%"
              src={map_2}
              alt="Card image cap"
              className = "landing-card-img-top"
            />
            <CardBody>
              <CardTitle><strong>Grocery Store Info</strong></CardTitle>
              <CardText>
                Clicking on a grocery store will display that store's relevant
                information, including:<br />
                - Estimated wait times<br />
                - Length of queue<br />
                - Health & Safety Information<br />
                - Contact Details<br />
                Place yourself in line at the store you choose by hitting the{" "}
                <strong>"Queue"</strong> button.
              </CardText>
            </CardBody>
          </Card>
          <Card className="shadow landing-card">
            <CardImg
              top
              width="100%"
              src={map_3}
              alt="Card image cap"
              className = "landing-card-img-top"
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
