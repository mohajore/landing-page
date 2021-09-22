import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Clients extends Component {
  render() {
    return (
      <div className="clients">
        <Container>
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
