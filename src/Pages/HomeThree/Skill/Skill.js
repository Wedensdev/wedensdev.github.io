import React from "react";
import { Link } from "react-router-dom";
import SkillArea from "./SkillArea";

const Skill = () => {
  return (
    <div className="skill__area-two py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 lg-mb-30">
            <div className="skill__area-two-left">
              {" "}
              <h4 className="mb-2">Every Day is a New Challenge</h4>
              <span>My Skills</span>{" "}
              <p>
                <b>Implementing Visual Design: </b>
                Translating the visual design concepts provided by designers
                into functional web pages using CSS.
                <br /> <b>Styling Web Elements: </b>
                Writing CSS code to apply styles such as colors, typography,
                spacing, and animations to HTML elements. <br />
                <b> Layout and Responsive Design: </b> Creating responsive web
                layouts that adapt to different screen sizes and devices, using
                CSS media queries and flexible grid systems.
                <br />
                <b>Cross-Browser Compatibility: </b> Ensuring that the website
                looks consistent and functions properly across different web
                browsers and devices.
                <br />
                <b>Performance Optimization: </b> Optimizing CSS code by
                reducing file size, minimizing rendering time, and improving
                overall website performance.
                <br />
                <b>Collaboration and Communication: </b> Working closely with
                designers and developers to understand project requirements,
                provide input on feasibility, and ensure effective communication
                throughout the development process.
                <br />
              </p>
              <br />
              <p>
                {" "}
                I am always eager to explore new projects and forge
                collaborative relationships with clients to achieve outstanding
                outcomes.
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <SkillArea></SkillArea>
          </div>
        </div>
        <div className="d-flex justify-content-center m-2 py-2">
          <Link className="theme-btn-1" to="/contact">
            HIRE ME NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skill;
