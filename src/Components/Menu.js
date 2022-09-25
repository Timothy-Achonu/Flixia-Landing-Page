import React from "react";

export const Menu = (props) => {
  return (
    <div className={`menu-component ${props.displayMenu ? "show" : "hide"}`}>
      <div className="close" onClick={props.hideMenu}>x</div>
      <ul>
        <li className="not-in-bigger-screen join">Join</li>
        <li className="not-in-bigger-screen log-in">Log in</li>
        <li className="not-in-bigger-screen contact">Contact Sales</li>
        <li>Solutions</li>
        <li>Features</li>
        <li>Resources</li>
        <li>Watch</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
};
