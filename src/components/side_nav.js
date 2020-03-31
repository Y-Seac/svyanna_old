import React, { useState } from "react";
import { Button, Modal, ModalBody, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Sticky from "react-sticky-el";
import Menu from "../assets/images/menu.png";
import Upsilon from "../assets/images/upsilon.png";
import House from "../assets/images/house.png";
import Shop from "../assets/images/shopping-cart.png";
import SocialIcons from "../components/social_icons.js";

const ModalExample = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Sticky mode="top" stickyStyle={{ zIndex: "98" }}>
      <Button className="sideNav-button" color="link">
        <img src={Upsilon} alt=" " />
      </Button>
      <Button
        color="link"
        className="sideNav-button float-right"
        onClick={toggle}>
        <img src={Menu} alt=" " />
      </Button>

      <Modal className="float-right" isOpen={modal} toggle={toggle}>
        <Button className="x-button" color="link" onClick={toggle}>
          <img src={Menu} alt=" " />
        </Button>
        <ModalBody>
          <Link to="/">
            <img src={House} alt=" " />
          </Link>
          {["About", "Services", "Works", "Contact"].map(name => (
            <Link to={`/${name}`}>
              <Container
                round="18px"
                pad={{ horizontal: "medium", vertical: "small" }}>
                <h1>{name}</h1>
              </Container>
            </Link>
          ))}
          <Link to="/shop">
            <img src={Shop} alt=" " />
          </Link>
        </ModalBody>
        <SocialIcons />
      </Modal>
    </Sticky>
  );
};

export default ModalExample;
