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
const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
const whatsappUrl = `https://wa.me/whatsappphonenumber/?text=urlencodedtext`;

const Social = () => {
  return (
    <Container className="social-media-box">
      <Row>
        <Col className="social-media-columns">
          <TwitterShareButton
            url={twitterUrl}
            title="Out-of-Line"
            hashtags={["OutOfLine", "StayinSafe"]}
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
            summary={`Out-of-Line is a free, web applicaion designed to increase the \n effictiveness of social distancing by means of a virtual queueue. \nShopping has never been safer. \nNeed to stand in line? Do it online, with Out-of-Line!`}
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
