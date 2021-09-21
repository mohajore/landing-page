import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Clients from "./Clients";
import Intro from "./Intro";
import Features from "./Features";
import Features2 from "./Features2";
import AppScreen from "./AppScreen";
import Title from "./../../blocks/Title";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Intro />
        <Clients />
        <Features />
        <Features2 />
        <Title />
        <AppScreen />
      </div>
    );
  }
}

export default Home;
