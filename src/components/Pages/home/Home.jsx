import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Clients from "./Clients";
import Intro from "./Intro";
import Features from "./Features";
import Features2 from "./Features2";
import AppScreen from "./AppScreen";
import Title from "./../../blocks/Title";
import UserReview from "./UserReview";
import NewsLetter from "./NewsLetter";
import Download from "./Download";
import CheckOut from "./CheckOut";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Intro />
        <Clients />
        <CheckOut />
        <Features />
        <Features2 />
        <AppScreen />
        <UserReview />
        <NewsLetter />
        <Download />
      </div>
    );
  }
}

export default Home;
