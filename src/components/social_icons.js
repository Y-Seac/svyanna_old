import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Gmail from "../assets/images/gmail.png";
import Instagram from "../assets/images/instagram.png";
import Github from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";

function SocialIcons() {
  return (
    <Container className="social_icons" direction="row">
      <Link to="https://www.linkedin.com/in/seacyanique">
        <img src={Linkedin} alt=" " />
      </Link>
      <Link to="https://github.com/Y-Seac">
        <img src={Github} alt=" " />
      </Link> 
      <Link to="/https://www.instagram.com/yanna_studios/">
        <img src={Instagram} alt=" " />
      </Link>
      <Link to="/contact">
        <img src={Gmail} alt=" " />
      </Link>
    </Container>
  );
}
export default SocialIcons;
