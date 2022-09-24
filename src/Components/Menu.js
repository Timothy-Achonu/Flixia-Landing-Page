import React from "react";

export const Menu = (props) => {
  return (
    <div className={`menu-component ${props.displayMenu ? "show" : "hide"}`}>
      <div className="close" onClick={props.hideMenu}>x</div>
      <ul>
        <li>Join</li>
        <li>Log in</li>
        <li>Contact Sales</li>
        <li>Solutions</li>
        <li>Features</li>
        <li>Resources</li>
        <li>Watch</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
};
