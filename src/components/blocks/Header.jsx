import React, { Component } from "react";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";
import { elastic as Menu } from "react-burger-menu";
//

//
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Container>
          <div className="Header__content">
            <div className="logo">
              <a href="/">
                <img src="/images/logo.png" alt="1" />
              </a>
            </div>
            {/* List,Start free trial button Start */}
            <div className="list-button">
              <div className="list">
                <ul className="list__ul">
                  {/* DropDown Start */}
                  <li className="list__ul__li">
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        <a className="list__ul__li__a-drop-down" href="/">
                          home
                        </a>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/homepage1">
                          homepage1
                        </Dropdown.Item>
                        <Dropdown.Item href="/homepage2">
                          homepage2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  {/* DropDown End */}

                  <li className="list__ul__li">
                    <a className="list__UL__li__a" href="/features">
                      features
                    </a>
                  </li>
                  <li className="list__ul__li">
                    <a className="list__UL__li__a" href="/contacts">
                      contacts
                    </a>
                  </li>
                </ul>
              </div>
              {/* Button Start */}
              <div className="free-trial-button">
                <button type="submit" class="shadow1 bgscheme">
                  start free trial
                </button>
              </div>
              {/* Button End */}
              {/* List,Start free trial button End */}
              {/* Sidebar Menu Start */}
              <div className="burger-menu-container">
                <Menu right>
                  <a id="home" className="menu-item" href="/">
                    home
                  </a>
                  <a id="about" className="menu-item" href="/features">
                    features
                  </a>
                  <a id="contact" className="menu-item" href="/contact">
                    contact
                  </a>
                </Menu>
              </div>
              {/* Sidebar Menu End */}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Header;
