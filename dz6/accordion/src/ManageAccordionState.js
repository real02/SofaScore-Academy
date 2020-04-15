import React from "react";

const ManageAccordionState = (initialState) => {
  const [active, setActive] = React.useState(initialState);

  const toogleActive = () => {
    setActive(!active);
  };

  return {
    toogleActive,
    active
  };
};

export default ManageAccordionState;
