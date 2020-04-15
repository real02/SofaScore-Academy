import React from "react";
import ReactDOM from "react-dom";

const ModalComp = ({ children }) => {
  const markup = <>{children}</>;
  const portalRoot = document.getElementById("portal-root");
  return ReactDOM.createPortal(markup, portalRoot);
};

export default ModalComp;
