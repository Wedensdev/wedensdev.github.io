import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={10}
        color="230, 129, 21"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={9}
        outerStyle={{
          border: "1px solid #eb8705",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "span",
          "i",
        ]}
      />
    </div>
  );
};

export default CustomCursor;
