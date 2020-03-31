import React from "react";
import { Link } from "react-router-dom";
import Sticky from "react-sticky-el";
import Icon from "../assets/images/customer-support.png";
import Cute from "../assets/images/cute.png";
import House from "../assets/images/house.png";
import PaintBrush from "../assets/images/paint-roller.png";
import Gmail from "../assets/images/gmail.png";
/**
*/

function MenuBar() {
  return (
    <Sticky mode="bottom" stickyClassName={"sticky-menu"}>
      <div className="menu-bar">
          <ol>
            <li className="menu-item">
              <Link to="/">
                <img src={House} alt=" "/>
                <div className="sub-menu"><p>home</p></div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/about">
                <img src={Cute} alt=" "/>
                <div className="sub-menu"><p>about</p></div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/services">
                <img src={Icon} alt=" "/>
                <div className="sub-menu"><p>services</p></div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/works">
              <img src={PaintBrush} alt=" "/>
               <div className="sub-menu"><p>works</p></div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">
                <img src={Gmail} alt=" "/>
                <div className="sub-menu"><p>contact</p></div>
              </Link>
            </li>
          </ol>
      </div>
    </Sticky>
  );
}
export default MenuBar;
