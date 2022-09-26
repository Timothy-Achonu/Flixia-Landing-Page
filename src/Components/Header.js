import React, {useState, useContext} from "react";
import logo from "./assets/Flixia-logo.PNG";
import { Menu } from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { TextChanger } from "./ChangeText";

export const Header = () => {
  const arrayIndex = useContext(TextChanger)
  const changingText = [
    "Build a company video hub",
    "Create videos in minutes",
    "Share your videos everwhere",
    "Sell your videos online",
    "Host vitual events",
    "Share video messages",
  ];
  const [displayMenu, setDisplayMenu] = React.useState(false);

  function changeTextColor() {
    let color;
    if (arrayIndex === 1) {
      color = "green";
    }
    if (arrayIndex === 2) {
      color = "yellow";
    }
    if (arrayIndex === 3) {
      color = "pink";
    }
    if (arrayIndex === 4) {
      color = "purple";
    }
    if (arrayIndex === 5) {
      color = "violet";
    }
    return color;
  }
  let styles = {
    color: changeTextColor(),
  };

  function showMenu() {
    setDisplayMenu((prevDisplay) => !prevDisplay);
  }

  return (
    <div className={`header-component `}>
      <nav className={`${displayMenu ? "hide" : "show"}`}>
        {<Menu hideMenu={showMenu} displayMenu={displayMenu} className={``} />}
        <figure className="hamburger" onClick={showMenu}>
          <FontAwesomeIcon icon={faBars} className="hamburger-main" />
        </figure>
        <figure className="flixia-logo">
          <img src={logo} />
        </figure>
        <div className="new-video">New Video</div>
        <div className="nav-plus">+</div>
      </nav>
      <div className={`header-mid-text ${displayMenu ? "hide" : "show"}`}>
        <div className="changing-text" style={styles}>
          {changingText[arrayIndex]}
        </div>
        <p className="with-flixia">With Flixia</p>
      </div>
      <div className="header-buttons">
        <button className="see-plans-btn">See Plans</button>
        <button className="join-free-btn">Join For Free</button>
      </div>
    </div>
  );
};
