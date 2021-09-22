import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class features2 extends Component {
  render() {
    return (
      <div className="features2">
        <Container>
          <Row>
            {/* Left Side Start */}
            <Col md={{ span: 4, offset: 1 }} sm={12}>
              <div className="features2__left-side">
                <img className="phone-pic" src="/images/img-3.png" />
                <img
                  className="circle-icon2"
                  src="/images/img-circleicon2.png"
                />
              </div>
            </Col>
            {/* Left Side End */}
            {/* Right Side Start */}
            <Col md={{ span: 6, offset: 0 }} sm={12}>
              <div className="features2__right-side">
                <p className="features2__right-side__feature1">
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

export default features2;
