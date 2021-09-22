import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../blocks/Title";

class Download extends Component {
  render() {
    return (
      <div className="download">
        <Container>
          <div className="download__content">
            {/*Download Title Start */}
            <h1>Download Today</h1>
            <p>and get started with a free 1 month trial for your business</p>
            {/*Download Title End */}

            {/* Appstor And Google-play Icons Start */}
            <div className="appstore-googleplay-icons">
              <a href="#">
                <img src="/images/img-appstore.png" alt="1" />
              </a>

              <a href="#">
                <img src="/images/img-googleplay.png" alt="1" />
              </a>
            </div>
            {/* Appstor And Google-play Icons End */}
          </div>
        </Container>
      </div>
    );
  }
}

export default Download;
