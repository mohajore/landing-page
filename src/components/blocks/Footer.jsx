import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container>
        {/* widget And social-media-icons Start */}
        <div className="widget-social">
          <div className="widget">
            <div>
              <a href="index.html">
                <img src="images/logo.png" alt="Appcraft" />
              </a>
            </div>
            <div>
              <ul class="social-links">
                <li>
                  <a href="#">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* widget And social-media-icons End */}
      </Container>
      {/* copyright Start */}
      <div className="copyright">
        <div className="col-12">
          <p>
            © 2019 Copyrights{" "}
            <a href="https://themeforest.net/user/puricreative/portfolio">
              PuriCreative
            </a>
          </p>
        </div>
      </div>
      {/* copyright End */}
    </div>
  );
}

export default Footer;
