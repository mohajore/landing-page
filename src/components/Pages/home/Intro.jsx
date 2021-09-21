import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <Container>
          <Row>
            {/* Left Side Start */}
            <Col lg={7} md={6}>
              <div className="intro__left-side">
                <h4>Perfect app landing page for your app.</h4>
                <p>
                  Purchase our premium quality complete landing page template.
                </p>
                <div className="appstore-googleplay-icons">
                  <img src="/images/img-appstore.png" alt="1" />
                  <img src="/images/img-googleplay.png" alt="1" />
                </div>
              </div>
            </Col>
            {/* Left Side End */}
            {/* Right Side Start */}
            <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 2 }}>
              <div className="intro__right-side">
                <img src="/images/img-1.png" />
              </div>
            </Col>
            {/* Right Side Start */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Intro;
