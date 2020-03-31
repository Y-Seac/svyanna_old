import React from "react";
import { Container } from "reactstrap";
var ReactRotatingText = require("react-rotating-text");

function TypistAnim() {
  return (
    <Container  className="typist">
      <h2>
      A Full-Stack Developer. Who specializes in
        <ReactRotatingText
          items={[
            " Web Development ",
            " Graphic Design ",
            " Digital Marketing & Branding ",
            " Multimedia Art Production "
          ]}
          color="#69DDFF"
        />
      </h2>
    </Container>
  );
}
export default TypistAnim;
