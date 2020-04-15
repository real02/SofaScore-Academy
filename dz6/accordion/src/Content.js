import React from "react";

const Content = (props) => {
  return (
    <div style={props.style} className="accordion-content" ref={props.contentRef}>
      {props.children}
    </div>
  );
};

export default Content;
