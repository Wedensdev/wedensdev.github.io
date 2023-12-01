import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`header__area ${variant ? variant : ""} header__sticky ${
          isSticky ? "header__sticky-active" : ""
        }`}
      >
        <div className="container custom-container">
          <div className="header__area-box">
            <div className="header__area-box-logo">
              <a className="theme-btn-1" href="mailto:Wedensmortume@gmail.com">
                HIRE ME NOW
              </a>
            </div>

            <div className="header__area-box-main-menu one">
              <ul
                className="mobile__menu"
                style={{ display: `${mobileToggle ? "block" : "none"}` }}
              >
                <li className="menu-item-has-children">
                  <Link to="home">Home</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="about-me">ABOUT ME</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="skills">SKILLS</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="portfolio">Portfolio</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="reivews">REVIEWS</Link>
                </li>
              </ul>
              <span
                className={
                  mobileToggle
                    ? "mobile-menu mobile-menu-active"
                    : "mobile-menu"
                }
                onClick={() => setMobileToggle(!mobileToggle)}
              >
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
