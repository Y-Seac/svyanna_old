import React, { Component } from "react";
import { Box, Heading, Tab, Tabs, Text, Button, Anchor } from "grommet";
import { Article } from "grommet-icons";
import { Next } from "grommet-icons";
import Typist from "react-typist";
import Author from "./Author";
import avatar from "../assets/images/user.jpg";
import TypistAnim from "../utils/typist_animation.js";

class About extends Component {
  render() {
    return (
      <Box fill="vertical">
        <Box className="about-box" direction="row" fill="vertical">
          <Box className="about_text" fill="vertical" basis="1/2">
            <TypistAnim />
          </Box>
          <Box className="about_typed" fill="vertical" basis="1/2">
            <Box pad="14px">
              <p>
                I work with{" "}
                <strong>
                  entrepreneurs, freelancers and small business owners{" "}
                </strong>
                to design inclusive, effective, and impactful digital products.
                I enjoy being challenged by{" "}
                <u>innovative ideas and pasionate people.</u> & With every new
                project I strive to{" "}
                <strong>
                  <mark>turn innovative ideas into digital realities.</mark>
                </strong>
              </p>
            </Box>
            <ul className="about_list">
              <h4>I've had the pleasure to work with:</h4>
              <li>Occuasions by Cressidle</li>
              <li>Airbnb</li>
              <li>Darling Magazine</li>
              <li>The 9th ward</li>
            </ul>
            <Button
              label={<Text> Blog </Text>}
              icon={<Article size="36px" />}
              plain={true}
              href={"/"}
              hoverIndicator="brand_pink"
              margin="20px 0px"
            />
          </Box>
        </Box>
        <Button
          label={<Text> CONTACT </Text>}
          icon={<Next size="32px" />}
          plain={true}
          href={"/contact"}
          hoverIndicator="brand_yellow"
          reverse={true}
          margin="20px 0px"
        />
      </Box>
    );
  }
}
export default About;
