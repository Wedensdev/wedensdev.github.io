import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section name="home">
      <div
        className="banner__area-three"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('assets/img/dever.jpg')`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="banner__area-three-content">
                <h1>
                  I am Name <br />
                  <span>web developer</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__area-three-bottom">
          <div className="container custom-container">
            <div className="banner__area-three-bottom-icon">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fab fa-github"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-behance"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
