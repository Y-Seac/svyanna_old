import React from "react";
import { Button, Box } from "grommet";
import { Github, Linkedin, Instagram, Medium, MailOption } from "grommet-icons";

function SocialIcons() {
  return (
    <Box className="social_icons" direction="row">
      <Button
        icon={<Linkedin size="16px" />}
        href="https://www.linkedin.com/in/seacyanique"
      />
      <Button icon={<Github size="18px" />} href="https://github.com/Y-Seac" />
      <Button icon={<MailOption size="18px" />} href="/" />
      <Button
        icon={<Instagram size="18px" />}
        href="https://github.com/Y-Seac"
      />
    </Box>
  );
}
export default SocialIcons;
