import React, { Component } from "react";
import { Box, Button, Anchor, Text } from "grommet";
import { Next } from "grommet-icons";
import avatar from "../assets/images/user.jpg";
import data from "../assets/images/data.svg";
import pantone from "../assets/images/pantone.svg";

class Home extends Component {
  render() {
    return (
      <Box direction="column" fill="true">
        <Box
          className="about-box"
          fill={true}
          margin="12px"
          align="center"
          direction="row"
        >
          <Box className="home_title" basis="2/3">
            <h1>
              I turn your <br />{" "}
              <font color="#69DDFF">
                {" "}
                ideas, concepts,
                <br /> & buisness plans <br />{" "}
              </font>
              into real working web applications.
            </h1>
          </Box>
          <Box basis="1/3">
            <div>
              <div className="char1" />
              <div className="char2" />
              <div className="char3" />
            </div>
          </Box>
        </Box>
        <Button
          icon={<Next size="32px" />}
          margin="20px 0px"
          label={<Text> READ MORE </Text>}
          href={"/services"}
          hoverIndicator="brand_yellow"
          plain={true}
          reverse={true}
        />
      </Box>
    );
  }
}
export default Home;
