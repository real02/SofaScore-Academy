import React from "react";
import "./App.css";
import Accordion from "./Accordion";
import ModalComp from "./ModalComp";
import ManageAccordionState from "./ManageAccordionState";

function App() {
  const { toogleActive, active } = ManageAccordionState(false);

  return (
    <div className="App">
      <Accordion title="LOREM IPSUM VOL1">
        <span className="accordion-text">aaaaaa</span>
      </Accordion>
      <Accordion title="LOREM IPSUM VOL2">
        <span className="accordion-text">bbbbbb</span>
      </Accordion>
      <Accordion title="LOREM IPSUM VOL3">
        <span className="accordion-text">cccccc</span>
      </Accordion>
      <div className="buttonOpen">
        <button onClick={toogleActive}>Open Modal</button>
      </div>
      {active && (
        <ModalComp>
          <div className="modal">
            <h1>Some modal opened here</h1>
            <button onClick={toogleActive}>Close Modal</button>
          </div>
        </ModalComp>
      )}
    </div>
  );
}

export default App;
