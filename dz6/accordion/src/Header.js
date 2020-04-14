import React from "react";

const Header = (props) => {
  return (
    <button className="accordion-title" onClick={props.toogleActive}>
      <p className="header-content">{props.title}</p>
      <span className={props.active ? "accordion-icon rotate" : "accordion-icon"}>
        >
      </span>
    </button>
  );
};

export default Header;
