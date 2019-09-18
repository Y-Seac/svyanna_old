import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { Grommet, Box, Text, Heading, Button } from "grommet";
import Particles from "react-particles-js";

//assets
import point from "./assets/images/point.svg";
import rhombus from "./assets/images/rhombus.svg";
import pentahedron from "./assets/images/pentahedron.svg";
import circle from "./assets/images/circle.svg";
import heart from "./assets/images/heart.svg";

//components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Services from "./components/Services";
import Blog from "./components/Blog";

//utils components
import SideNav from "./components/SideNav";

//import SocialIcons from "./utils/social_icons.js";

const ParticlesContainer = (props: any) => (
  <Particles
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }}
    params={{
      particles: {
        number: {
          value: 100,
          density: {
            enable: false,
            value_area: 900
          }
        },
        size: {
          value: 12,
          random: true,
          anim: {
            speed: 5,
            size_min: 0.3
          }
        },
        color: {
          value: ["#69DDFF", "#FDE3A4", "#F15025", "#F4C6DB"]
        },
        shape: {
          type: ["circle", "edge", "polygon"]
        },
        move: {
          random: true,
          speed: 3,
          direction: "top",
          out_mode: "out"
        },
        line_linked: {
          enable: false
        }
      }
    }}
  />
);
//Not gunna lie =, I've  missed you since i've said goodbye.
class App extends Component {
  render() {
    return (
      <div>
        <ParticlesContainer />
        <Grommet
          full={true}
          cssVars={true}
          theme={{
            global: {
              colors: {
                brand_pink: "#F4C6DB", //queen_pink
                brand_yellow: "#FDE3A4", //navajo_white
                brand_blue: "#04E060", //magic_mint
                brand_red: "#F15025", //redish
                accent_blue: "#69DDFF" //maya_blue familar_blue
              },
              hover: {
                background: "#69DDFF"
              }
            },
            layer: {
              background: "#69DDFF",
              zIndex: "100"
            },
            tab: {
              pad: "8px 0px 8px 0px",
              color: "000000",
              margin: "12px 12px 0px 12px",
              active: { color: "#FCB000" },
              hover: {
                color: "accent_blue"
              },
              border: {
                side: "bottom",
                size: "xxsmall",
                color: "#FFFFFF",
                active: { color: "FFFFFF" }
              }
            },
            button: {
              padding: {
                vertical: "5px"
              }
            },
            text: {
              medium: {
                size: "24px"
              }
            }
          }}
        >
          <Box fill={true}>
            <BrowserRouter>
              <SideNav />
              <Box
                className="outer-box"
                direction="row"
                background="#FFFFFF"
                fill={true}
                pad="52px 52px 0px 52px"
              >
                <Box
                  className="inner-box"
                  fill={true}
                  animation={{
                    type: "fadeIn",
                    duration: 1500,
                    size: "large"
                  }}
                >
                  <Route exact path="/" component={Blog} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/works" component={Works} />
                  <Route path="/services" component={Services} />
                  <Route path="/home" component={Home} />
                </Box>
              </Box>
            </BrowserRouter>
          </Box>
        </Grommet>
      </div>
    );
  }
}

export default App;
