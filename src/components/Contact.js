import React, { Component } from "react";
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  RadioButtonGroup,
  Select,
  Text,
  TextArea
} from "grommet";
import { Basket, Article } from "grommet-icons";

class Contact extends Component {
  render() {
    return (
      <Box fill="true">
        <Box
          className="contact-box"
          fill="true"
          direction="column"
          pad="xsmall"
          gap="small"
          round="6px"
          background={{
            color: "#F4C6DB",
            opacity: "medium"
          }}
        >
          <Box
            pad="small"
            round="6px"
            fill="true"
            background="rgb(255,255,255, 0.9)"
          >
            <Box
              className="wrapper"
              direction="row"
              justify="evenly"
              fill="vertical"
            >
              <Box className="contact-text" basis="1/3">
                <h1>
                  Dont be a stranger,
                  <br />
                  just say hello.
                </h1>
              </Box>
              <Box className="contact-form" basis="1/2">
                <Form onSubmit={({ value }) => console.log("Submit: ", value)}>
                  <FormField name="name" placeholder="Name" required={true} />
                  <FormField name="name" placeholder="E-mail" required={true} />
                  <FormField
                    placeholder="Time-line"
                    name="select"
                    component={Select}
                    options={[
                      "$500 - $1,000",
                      "$1,000 - $2,500",
                      "$2,500 - $5,000"
                    ]}
                  />
                  <FormField
                    name="textbox"
                    placeholder="A brief discription of projects."
                    required={true}
                  />
                  <Button
                    type="submit"
                    label="Submit"
                    primary={true}
                    color="brand_yellow"
                  />
                </Form>
                <Text>
                  Please please feel free to get in touch with me! I am always
                  open to discussing new projects, creative ideas or
                  opportunities to be part of your visions.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          direction="row"
          className="contact_buttons"
          margin="12px"
          fill="horizontal"
          gap="75%"
        >
          <Button
            plain="true"
            label={<Text> Blog </Text>}
            icon={<Article size="42px" />}
            href={"/"}
            margin="0 24px"
            hoverIndicator="brand_red"
          />
          <Button
            plain="true"
            label={<Text> Shop </Text>}
            icon={<Basket size="42px" />}
            href={"/shop"}
            margin="0 24px"
            hoverIndicator="accent_blue"
          />
        </Box>
      </Box>
    );
  }
}
export default Contact;
