import React from "react";

const Content = (props) => {
  return (
    <div className="accordion-content" ref={props.contentRef}>
      {props.children}
    </div>
  );
};

export default Content;
