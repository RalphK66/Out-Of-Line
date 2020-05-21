import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import "../css/social.css";

//URL from current page
const url = "http://www.outofline.store";
// Social Media URL's
const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
const whatsappUrl = `https://wa.me/whatsappphonenumber/?text=I'm%20using%20Out%2Dof%2DLine%2D%2e%20`;

const Social = () => {
  return (
    <Container className="social-media-box">
      <Row>
        <Col className="social-media-columns">
          <TwitterShareButton
            url={url}
            title={"Out-of-Line"}
            hashtags={["outofline", "stayinsafe"]}
          >
            <TwitterIcon size={40} borderRadius="10" />
          </TwitterShareButton>
        </Col>
        <Col className="social-media-columns">
          <FacebookShareButton url={facebookUrl} hashtag="#OutOfLine">
            <FacebookIcon size={40} borderRadius="10" />
          </FacebookShareButton>
        </Col>
        <Col className="social-media-columns">
          <LinkedinShareButton
            url={linkedinUrl}
            title="Out-of-Line"
            summary="Out-of-Line is a free, web application designed to increase the effectiveness of social distancing by means of a virtual queue. 
            Shopping has never been safer. Need to stand in line? 
            Do it online, with Out-of-Line!"
            source="www\w.outofline.store"
          >
            <LinkedinIcon size={40} borderRadius="10" />
          </LinkedinShareButton>
        </Col>
        <Col className="social-media-columns">
          <WhatsappShareButton
            url={whatsappUrl}
            title="Out-of-Line"
            seperator={<br />}
          >
            <WhatsappIcon size={40} borderRadius="10" />
          </WhatsappShareButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
