import React, { Component } from "react";
import {
  Box,
  Tabs,
  Tab,
  Distribution,
  Text,
  Button,
  InfiniteScroll
} from "grommet";
import { Next } from "grommet-icons";
import work1 from "../assets/images/works-fill.png";

class Works extends Component {
  render() {
    return (
      <Box fill="true">
        <h1> Recent Projects</h1>
        <Box className="works-box" direction="column" round="5px" fill={true}>
          <Distribution
            basis="medium"
            values={[
              { value: 50, color: "brand_yellow" },
              { value: 30, color: "accent_blue" },
              { value: 20, color: "brand_pink" },
              { value: 10, color: "#F15025" }
            ]}
          >
            {value => (
              <Box pad="xsmall" background={value.color} fill={true}>
                <Text size="large">{value.value}</Text>
              </Box>
            )}
          </Distribution>
          <h4>
            Here are a few of my recent design projects. Want to see more? Email
            me.
          </h4>
        </Box>
        <Button
          icon={<Next size="32px" />}
          label={<Text> ABOUT </Text>}
          href={"/about"}
          hoverIndicator="brand_yellow"
          plain={true}
          reverse={true}
          margin="20px 0px"
        />
      </Box>
    );
  }
}
export default Works;
