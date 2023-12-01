import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { SkillBar } from "react-skillbars";

const SkillArea = () => {
  const [skillBar, setSkillBar] = useState(false);
  const JavaScript = [{ level: 98 }];
  const TypeScript = [{ level: 97 }];
  const React = [{ level: 92 }];
  const Next = [{ level: 93 }];
  const Tailwind = [{ level: 95 }];
  const SassAndLess = [{ level: 93 }];
  return (
    <div className="skill__area-two-right">
      <ScrollTrigger
        onEnter={() => setSkillBar(true)}
        onExit={() => setSkillBar(false)}
      >
        <div className="skill__area-two-right-skill">
          <div className="skill__area-two-right-skill-item">
            <div className="skill__area-two-right-skill-item-content">
              <h6>Javascript</h6>
              <div className="skill__area-two-right-skill-item-count">
                <>
                  {skillBar && (
                    <CountUp
                      start={0}
                      end={98}
                      duration={4}
                      delay={0}
                    ></CountUp>
                  )}
                  %
                </>
              </div>
            </div>
            <div className="skill__area-two-right-skill-item-bar">
              {skillBar && (
                <SkillBar
                  skills={JavaScript}
                  height={4}
                  animationDuration={2500}
                />
              )}
            </div>
          </div>
          <div className="skill__area-two-right-skill-item mt-30">
            <div className="skill__area-two-right-skill-item-content">
              <h6>TypeScript</h6>
              <div className="skill__area-two-right-skill-item-count">
                <>
                  {skillBar && (
                    <CountUp
                      start={0}
                      end={97}
                      duration={4}
                      delay={0}
                    ></CountUp>
                  )}
                  %
                </>
              </div>
            </div>
            <div className="skill__area-two-right-skill-item-bar">
              {skillBar && (
                <SkillBar
                  skills={TypeScript}
                  height={4}
                  animationDuration={2500}
                />
              )}
            </div>
          </div>
          <div className="skill__area-two-right-skill-item mt-30">
            <div className="skill__area-two-right-skill-item-content">
              <h6>React</h6>
              <div className="skill__area-two-right-skill-item-count">
                <>
                  {skillBar && (
                    <CountUp
                      start={0}
                      end={92}
                      duration={4}
                      delay={0}
                    ></CountUp>
                  )}
                  %
                </>
              </div>
            </div>
            <div className="skill__area-two-right-skill-item-bar w-100">
              {skillBar && (
                <SkillBar skills={React} height={4} animationDuration={2500} />
              )}
            </div>
          </div>
          <div className="skill__area-two-right-skill-item mt-30">
            <div className="skill__area-two-right-skill-item-content">
              <h6>React</h6>
              <div className="skill__area-two-right-skill-item-count">
                <>
                  {skillBar && (
                    <CountUp
                      start={0}
                      end={93}
                      duration={4}
                      delay={0}
                    ></CountUp>
                  )}
                  %
                </>
              </div>
            </div>
            <div className="skill__area-two-right-skill-item-bar w-100">
              {skillBar && (
                <SkillBar skills={Next} height={4} animationDuration={2500} />
              )}
            </div>
          </div>
          <div className="skill__area-two-right-skill-item mt-30">
            <div className="skill__area-two-right-skill-item-content">
              <h6>React</h6>
              <div className="skill__area-two-right-skill-item-count">
                <>
                  {skillBar && (
                    <CountUp
                      start={0}
                      end={93}
                      duration={4}
                      delay={0}
                    ></CountUp>
                  )}
                  %
                </>
              </div>
            </div>
            <div className="skill__area-two-right-skill-item-bar w-100">
              {skillBar && (
                <SkillBar skills={Next} height={4} animationDuration={2500} />
              )}
            </div>
          </div>
          <div className="skill__area-two-right-skill-item mt-30">
            <div className="skill__area-two-right-skill-item-content">
              <h6>Tailwind</h6>
              <div className="skill__area-two-right-skill-item-count">
                <>
                  {skillBar && (
                    <CountUp
                      start={0}
                      end={95}
                      duration={4}
                      delay={0}
                    ></CountUp>
                  )}
                  %
                </>
              </div>
            </div>
            <div className="skill__area-two-right-skill-item-bar w-100">
              {skillBar && (
                <SkillBar
                  skills={Tailwind}
                  height={4}
                  animationDuration={2500}
                />
              )}
            </div>
          </div>
          <div className="skill__area-two-right-skill-item mt-30">
            <div className="skill__area-two-right-skill-item-content">
              <h6>Sass/Less</h6>
              <div className="skill__area-two-right-skill-item-count">
                <>
                  {skillBar && (
                    <CountUp
                      start={0}
                      end={93}
                      duration={4}
                      delay={0}
                    ></CountUp>
                  )}
                  %
                </>
              </div>
            </div>
            <div className="skill__area-two-right-skill-item-bar w-100">
              {skillBar && (
                <SkillBar
                  skills={SassAndLess}
                  height={4}
                  animationDuration={2500}
                />
              )}
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default SkillArea;
