import React from "react";
import "./Hamburger.css";

function Hamburger() {
  return (
    <label htmlFor="check">
      <input type="checkbox" id="check" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default Hamburger;
