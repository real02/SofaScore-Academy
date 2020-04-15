import React from "react";
import Header from "./Header";
import Content from "./Content";
import ManageAccordionState from "./ManageAccordionState";

const Accordion = (props) => {
  const contentRef = React.useRef(null);

  const { toogleActive, active } = ManageAccordionState(false);

  let height = 0;

  if (contentRef && contentRef.current) {
    height = contentRef.current.scrollHeight;
  }

  return (
    <div className="accordion-section">
      <Header active={active} toogleActive={toogleActive} title={props.title} />
      <Content
        style={{ maxHeight: active ? height : 0 }}
        contentRef={contentRef}
        children={props.children}
      />
    </div>
  );
};

export default Accordion;
