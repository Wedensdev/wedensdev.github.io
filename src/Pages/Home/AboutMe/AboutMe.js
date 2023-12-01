import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const AboutMe = () => {
  const [skillBar, setSkillBar] = useState(false);

  const counterData = [
    {
      id: 520,
      description: "Project Complete At Last 5 Years",
      value: "K",
    },
    {
      id: 95,
      description: "Clients Happy With Metier",
      value: "%",
    },
    {
      id: 987,
      description: "Project Complete At Last 5 Years",
      value: "+",
    },
    {
      id: 50,
      description: "Clients Active With Metier",
      value: "%",
    },
  ];

  return (
    <ScrollTrigger
      onEnter={() => setSkillBar(true)}
      onExit={() => setSkillBar(false)}
    >
      <section name="about-me">
        <div className="about__page section-padding pb-100">
          <div className="container">
            <div className="row mb-60">
              <div className="col-xl-6 col-lg-8">
                <div className="about__page-title">
                  <span className="subtitle">About Me</span>
                  <h2>Let's Work Together On Your Next Project!</h2>
                </div>
              </div>
            </div>
            <div className="row mb-100">
              <div className="col-xl-12">
                <div className="about__page-area">
                  <div className="about__page-area-experience">
                    <h3>
                      <span className="counter">
                        {skillBar && (
                          <CountUp
                            start={0}
                            end={10}
                            duration={2}
                            delay={0}
                          ></CountUp>
                        )}
                        +
                      </span>
                    </h3>
                    <p>Years Experience of Full-Stack Developer</p>
                  </div>
                  <img src="assets/img/about-me.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              {counterData.map((item, id) => (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={id}>
                  <div className="about__page-area-item">
                    <h2>
                      <span className="counter">
                        {skillBar && (
                          <CountUp
                            start={0}
                            end={item.id}
                            duration={4}
                            delay={0}
                          ></CountUp>
                        )}
                      </span>
                      {item.value}
                    </h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default AboutMe;
