import React, { Component } from "react";
import { Box, Button, Distribution, Text, Grid } from "grommet";
import { Next } from "grommet-icons";
import Author from "./Author";

class Services extends Component {
  render() {
    return (
      <Box className="services" fill="true">
        <Box
          className="services_boxes"
          direction="row"
          justify="evenly"
          gap="5px"
          pad="5px"
          round="6px"
          background={{
            color: "#F4C6DB",
            opacity: "medium"
          }}
        >
          <div className="services-h1">
            <h1>
              S <br /> e <br /> r
              <br /> v <br /> i <br /> c <br /> e <br /> s
            </h1>
          </div>
          <Box
            pad="small"
            round="6px"
            background="rgb(255,255,255)"
            width="680px"
            overflow="auto"
          >
            <div className="design_icon" />

            <h2>Full-Stack Web Development</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life.
              <br />
              <br />
            </p>
            <h3>Languages I speak:</h3>
            <p>React.js, JavaScript, HTML/CSS, Node.js, Java</p>
            <ul className="skills_list">
              <h3>Dev Tools:</h3>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>MongoDB</li>
              <li>Canvas</li>
            </ul>
          </Box>
          <Box
            pad="small"
            round="6px"
            background="rgb(255,255,255)"
            overflow="auto"
          >
            <div className="blueprint_icon" />
            <h2>
              Grapic Design
              <br />
              <br />
            </h2>
            <p>
              I love creative bold content structure, clean design patterns, and
              thoughtful user interactions.
            </p>
            <h3>Things I enjoy designing:</h3>
            <p>UX & UI, Banner & Logos, Posters, Animations , Illistration</p>
            <ul className="skills_list">
              <h3>Design Tools:</h3>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>SVG Animation</li>
              <li>Adobe InDesign</li>
            </ul>
          </Box>
          <Box
            pad="small"
            round="6px"
            background="rgb(255,255,255)"
            overflow="auto"
          >
            <div className="bar_icon" />
            <h2>Website & Content Management</h2>
            <p>
              Have and existing website thats just doesn't meet your needs? I
              can help with that.
            </p>
            <h3>Content Management Systems:</h3>
            <p>Wordpress, Wix, Squarespace, email Marketing </p>
            <ul className="skills_list">
              <h3>Services:</h3>
              <li>JavaScript/CSS/HTML Fixes</li>
              <li>SEO Markingting</li>
              <li>Theme Development</li>
              <li>Plugin Development</li>
            </ul>
          </Box>
        </Box>
        <Button
          icon={<Next size="32px" />}
          label={<Text> RECENT PROJECTS </Text>}
          href={"/works"}
          hoverIndicator="brand_yellow"
          plain={true}
          reverse={true}
          margin="20px 0px"
        />
      </Box>
    );
  }
}
export default Services;
