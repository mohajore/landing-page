import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <Container>
          <Row>
            {/* Left Side Start */}
            <Col
              lg={{ span: 4, offset: 1 }}
              md={{ span: 4, offset: 0 }}
              sm={12}
            >
              <div className="features__left-side">
                <img className="phone-pic" src="/images/img-2.png" />
                <img
                  className="circle-icon"
                  src="/images/img-circleicon1.png"
                />
              </div>
            </Col>
            {/* Left Side Start */}
            {/* Right Side Start */}
            <Col
              lg={{ span: 5, offset: 1 }}
              md={{ span: 5, offset: 2 }}
              sm={12}
            >
              <div className="features__right-side">
                <p className="features__right-side__feature1">
                  01 – ADD NEW TASK
                </p>
                <h4>Everything starts with the task</h4>
                <p>
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour lorem ipsum is simply free text in
                  the
                </p>
                {/* Button Start */}
                <div className="free-trial-button">
                  <button type="submit" class="shadow1 bgscheme">
                    GET STARTED NOW
                  </button>
                </div>
                {/* Button End */}
              </div>
            </Col>
            {/* Right Side End */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Features;
