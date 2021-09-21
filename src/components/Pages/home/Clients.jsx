import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Clients extends Component {
  render() {
    return (
      <div className="clients">
        <Container>
          {/* <Row>
            <Col lg={6} md={3} sm={6}>
              <div>
                {" "}
                <img src="images/img-client1.png" />
              </div>
            </Col>
            <Col lg={6} md={3} sm={6}>
              <div>
                {" "}
                <img src="images/img-client1.png" />
              </div>
            </Col>
            <Col lg={6} md={3} sm={6}>
              <div>
                {" "}
                <img src="images/img-client1.png" />
              </div>
            </Col>
            <Col lg={6} md={3} sm={6}>
              <div>
                {" "}
                <img src="images/img-client1.png" />
              </div>
            </Col>
            <Col lg={6} md={{ offset: 3, span: 3 }} sm={6}>
              <div>
                {" "}
                <img src="images/img-client1.png" />
              </div>
            </Col>
          </Row> */}
          <div className="clients-logo">
            <img src="images/img-client1.png" />
            <img src="images/img-client2.png" />
            <img src="images/img-client3.png" />
            <img src="images/img-client4.png" />
            <img src="images/img-client5.png" />
          </div>
        </Container>
      </div>
    );
  }
}

export default Clients;
