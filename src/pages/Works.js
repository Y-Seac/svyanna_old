import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import WorksGrid from "../components/works_grid";

class Works extends Component {
  render() {
    return (
      <Container fluid={true} className="works-page">
        <Row>
          <Col>
            <h1> Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <div className="border border-secondary">
              <h2> Recent HOE Projects</h2>
              <h2> Recent Projects</h2>
              <h2> Recent Projects</h2>
              <h2> Recent Projects</h2>
              <p>Hello my name is Yanna im 25 fun and crazy yay</p>
            </div>
          </Col>
          <Col sm="8">
            <h3> Recent Projects</h3>
            <WorksGrid />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Works;
