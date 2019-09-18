import React, { useState } from "react";
import { Box, Layer, Text, Button } from "grommet";
import { Menu, Close, Home, Basket } from "grommet-icons";
import SocialIcons from "../utils/social_icons.js";

function SideNav() {
  const [show, setShow] = useState();

  return (
    <div className="sideNav">
      <Box fill="vertical">
        <Button
          icon={<Menu size="32px" />}
          onClick={() => setShow(true)}
          elevation="small"
          hoverIndicator="true"
          color="brand_pink"
          pad="22px 0px 0px 22px"
        />
        {show && (
          <Layer
            full="vertical"
            modal={true}
            plain={false}
            position="left"
            responsive="true"
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
            animation="slide"
          >
            <Box
              background="#69DDFF"
              fill="vertical"
              width="850px"
              round="18px"
              align="center"
              animation={{
                type: "fadeIn",
                duration: 1000,
                size: "large"
              }}
            >
              <Button
                icon={<Close color="#FFFFFF" sixe="58px" />}
                onClick={() => setShow(false)}
                alignSelf="end"
                hoverIndicator="brand_yellow"
              />

              <Button
                icon={<Home color="white" size="large" />}
                href="/home"
                hoverIndicator="brand_yellow"
              />

              {["Services", "Works", "About", "Contact"].map(name => (
                <Button
                  key={name}
                  href={`/${name}`}
                  hoverIndicator="brand_yellow"
                >
                  <Box
                    round="18px"
                    pad={{ horizontal: "medium", vertical: "small" }}
                  >
                    <Text size="48px" color="white">
                      {name}
                    </Text>
                  </Box>
                </Button>
              ))}
              <Button
                icon={<Basket color="white" size="large" />}
                href={"/shop"}
                hoverIndicator="brand_yellow"
              />
            </Box>
          </Layer>
        )}
      </Box>
    </div>
  );
}

export default SideNav;
