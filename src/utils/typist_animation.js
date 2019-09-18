import React from "react";
import { Button, Box } from "grommet";
import { Github, Linkedin, Instagram, Medium, MailOption } from "grommet-icons";
import Typist from "react-typist";

function TypistAnim() {
  return (
    <Box className="typist" height="350px" width="510px" margin="20px">
      <h1>Hi i'm Yanna, </h1>
      <Typist
        className="typing-title"
        avgTypingDelay={40}
        startDelay={250}
        cursor={{ show: false }}
      >
        <h1>
          a
          <font color="#69DDFF">
            <Typist.Delay ms={500} />
            <span>
              <strong> Web Developer </strong>
            </span>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={15} delay={500} />
            <span>
              <strong> Graphic Designer </strong>
            </span>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={17} delay={500} />
            <span>
              <strong> Hardware Engineer </strong>
            </span>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={19} delay={500} />
            <span>
              <strong> Hackathon Enthusiast </strong>
            </span>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={22} delay={500} />
            <span>
              <strong> Multi-talented Creative </strong>
            </span>
            <Typist.Delay ms={900} />
          </font>
          who loves to code.
        </h1>
      </Typist>
    </Box>
  );
}
export default TypistAnim;
