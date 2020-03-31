import React, { Component } from "react";
import ContactForm from "../components/forms_contact";
import { Container, Row, Col } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <Container className="contact-page">
        <Row>
          <Col>
            <div className="contact-text">
              <h1>
                Don't be shy... <br /> Just say hello.
              </h1>
            </div>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
