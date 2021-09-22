import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/style/_main.scss";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/blocks/Header";
import Home from "./components/Pages/home/Home";
import Footer from "./components/blocks/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {" "}
        <BrowserRouter basename="/">
          <Header />
          <Switch>
            <Route component={Home} path="/" exact />
            <Home />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
