import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class About extends Component {
  render() {
    return (
      <Container className="about-page">
        <Row>
          <Col className="about-typist" fill="vertical">
            <h1> Allow me to re-introduce myself, </h1>
            <h1> My name is </h1>
            <h1 className="text-bright"> Yanna </h1>
          </Col>
          <Col className="card about-text shadow p-4 mb-4">
            <h3>
              a professional creative with a specialization in
              <font className="text-basic">
                {" "}
                Web Development, graphic designe, & digital branding.
              </font>
            </h3>
            <p>
              I work with
              <strong>
                entrepreneurs, freelancers, and small business owners
              </strong>
              to design inclusive, effective, and impactful digital products. I
              enjoy being challenged by innovative ideas and pasionate
              people.With every new project I strive to{" "}
              <strong>turn innovative ideas into digital realities.</strong>
            </p>
            <p>
              With all the technologies available, there is no "best" solution.
              A web app built in ReactJs? Nice. A mobile app that needs to be
              deployed to both iOS and Android, with one code base? Ionic, it
              is! A custom UI solution implemented using jQuery on a Wordpress
              site? Done. The options are endless, so I typically use a
              combination of these:
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default About;
