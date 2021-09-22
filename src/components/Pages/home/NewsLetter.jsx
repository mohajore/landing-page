import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Title from "./../../blocks/Title";

class NewsLetter extends Component {
  render() {
    return (
      <div className="news-letter">
        <Title title1="NEWSLETTER" title2="Subscribe to our newsletter" />
        <Container>
          <div className="news-letter__content">
            <form action="#" id="SubscribeForm">
              <input
                type="email"
                name="yourEmail"
                placeholder="Enter your email address"
                required=""
              />
              <button type="submit" class="shadow1 bgscheme">
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default NewsLetter;
