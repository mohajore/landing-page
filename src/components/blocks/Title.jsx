import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
class Title extends Component {
  render() {
    return (
      <div className="title">
        <Container>
          <div className="title_content">
            <h4>{this.props.title1}</h4>
            <h1>{this.props.title2}</h1>
          </div>
        </Container>
      </div>
    );
  }
}

export default Title;
