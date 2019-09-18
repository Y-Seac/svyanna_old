import React, { Component } from "react";
import { Box, Heading, Text, Button, Anchor } from "grommet";
import { Code, More, Paint, Gremlin } from "grommet-icons";
import Typist from "react-typist";
import SideNav from "./SideNav";
import avatar from "../assets/images/user.jpg";
import SocialIcons from "../utils/social_icons.js";
import NavIcons from "../utils/nav_icons.js";

export default class Author extends Component {
  render() {
    return (
      <Box
        className="side-box"
        round="5px"
        pad="xsmall"
        width="650px"
        animation={{
          type: "fadeIn",
          duration: 1500,
          size: "large"
        }}
      >
        <Box align="center" pad="12px" margin="24px 0 24px 0">
          <div className="avatar">
            <Anchor href="/home">
              <img src={avatar} alt="" />
            </Anchor>
          </div>
          <SocialIcons />
        </Box>
        <Button
          label="Contact Me"
          href="/contact"
          primary={true}
          color="brand_yellow"
          margin="12px 0px 12px 0px"
        />
        <NavIcons />
      </Box>
    );
  }
}
