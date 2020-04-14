import React from "react";
import Header from "./Header";
import Content from "./Content";
import ManageAccordionState from "./ManageAccordionState";

const Accordion = (props) => {
  const contentRef = React.useRef(null);

  const { toogleActive, active } = ManageAccordionState(false);

  React.useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [active]);

  return (
    <div className="accordion-section">
      <Header active={active} toogleActive={toogleActive} title={props.title} />
      <Content contentRef={contentRef} children={props.children} />
    </div>
  );
};

export default Accordion;
