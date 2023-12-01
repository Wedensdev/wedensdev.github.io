import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <div className="footer__area pt-60 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="footer__area-widget t-center">
                <div className="footer__area-widget-about">
                  <div className="footer__area-widget-about-social three">
                    <ul>
                      <li>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://behance.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-behance"></i>
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://basketball.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fal fa-basketball-ball"></i>
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://pinterest.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-pinterest-p"></i>
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="footer__area-widget-about-menu three">
                    <ul>
                      <li>
                        <Link to="home">HOME</Link>
                      </li>
                      <li>
                        <Link to="about-me">ABOUT ME</Link>
                      </li>
                      <li>
                        <Link to="skills">SKILLS</Link>
                      </li>
                      <li>
                        <Link to="portfolio">PORTFOLIO</Link>
                      </li>
                      <li>
                        <Link to="reivews">REVIEWS</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area">
        <div className="container">
          <div className="row align-items-center copyright__area-border">
            <div className="col-xl-12">
              <div className="copyright__area-left t-center">
                <p>
                  Copyright © 2023
                  <a href="mailto:Wedensmortume@gmail.com"> Maxim</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
