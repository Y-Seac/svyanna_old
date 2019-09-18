import React from "react";
import { Button, Box } from "grommet";
import { Code, Paint, Gremlin, More } from "grommet-icons";

function NavIcons() {
  return (
    <Box direction="row">
      <Button
        icon={<Code color="brand_blue" size="38px" />}
        href={"/works"}
        hoverIndicator="brand_yellow"
      />
      <Button
        icon={<Paint color="brand_blue" size="38px" />}
        href={"/works"}
        hoverIndicator="brand_yellow"
      />
      <Button
        icon={<Gremlin color="brand_blue" size="38px" />}
        href={"/artstudio"}
        hoverIndicator="brand_yellow"
      />
      <Button
        icon={<More color="brand_blue" size="38px" />}
        href={"/"}
        hoverIndicator="brand_yellow"
      />
    </Box>
  );
}
export default NavIcons;
