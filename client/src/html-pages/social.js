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

//URL from current page
// const url = "http://www.outofline.store";  *** change to this once domain name is functioning
const url = window.location.href;
// Social Media URL's
const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
const whatsappUrl = `https://wa.me/whatsappphonenumber/?text=urlencodedtext`;

const Social = () => {
  return (
    <Container style={{ textAlign: "center", width:"200px", marginTop: "20px"}}>
      <Row>
        <Col style={{width: "fit-content"}}>
          <TwitterShareButton
            url={twitterUrl}
            title="Out-of-Line"
            hashtags={["OutOfLine", "StayinSafe"]}
          >
            <TwitterIcon size={40} borderRadius="10" />
          </TwitterShareButton>
        </Col>
        <Col style={{width: "fit-content"}}>
        <FacebookShareButton 
        url={facebookUrl} 
        hashtag="#OutOfLine"
        >
          <FacebookIcon size={40} borderRadius="10" />
        </FacebookShareButton>
        </Col>
        <Col style={{width: "fit-content"}}>
          <LinkedinShareButton
            url={linkedinUrl}
            title="Out-of-Line"
            summary={`Out-of-Line is a free, web applicaion designed to increase the \n effictiveness of social distancing by means of a virtual queueue. \nShopping has never been safer. \nNeed to stand in line? Do it online, with Out-of-Line!`}
            source="www\w.outofline.store"
          >
            <LinkedinIcon size={40} borderRadius="10" />
          </LinkedinShareButton>
        </Col>
        <Col style={{width: "fit-content"}}>
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
