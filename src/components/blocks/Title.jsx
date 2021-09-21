import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
class Title extends Component {
  render() {
    return (
      <div className="title">
        <Container>
          <div className="title_content">
            <h4>APP SCREEN</h4>
            <h1>How our app looks like</h1>
          </div>
        </Container>
      </div>
    );
  }
}

export default Title;
