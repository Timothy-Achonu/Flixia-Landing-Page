import React from "react";
import logo from "./Flixia-logo.PNG";
import {Menu} from "./Menu"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from  "@fortawesome/free-solid-svg-icons"
import {faYoutube, faGithub} from "@fortawesome/free-brands-svg-icons"


export const Header = () => {
  const changingText = [
    "Build a company video hub",
    "Create videos in minutes",
    "Share your videos everwhere",
    "Sell your videos online",
    "Host vitual events",
    "Share video messages",
  ];
  const [arrayIndex, setArrayIndex] = React.useState(0);
  const [displayMenu, setDisplayMenu] = React.useState(false)
//   console.log(changingText[arrayIndex], arrayIndex);
  let styles;
  setTimeout(() => {
    // styles = {
    //     animation: "slide-up 500ms linear 3000ms infinite normal none",
    //   };
    if (arrayIndex >= changingText.length) {
      setArrayIndex(0);
    } else {
      setArrayIndex((prevIndex) => prevIndex + 1);
    }
  }, 3000);
  function showMenu() {
     setDisplayMenu(prevDisplay => !prevDisplay)
     console.log('peace')
  }

  return (
    <div className={`header-component `}>
      <nav className={`${displayMenu ? "hide" : "show"}`}>
        { 
        <Menu 
          hideMenu={showMenu}
          displayMenu={displayMenu}
          className={``}
        />
        }
        <figure className="hamburger" onClick={showMenu}>
          <FontAwesomeIcon icon={faBars}  className="hamburger-main"/>  
        </figure>
        <figure className="flixia-logo">
          <img src={logo} />
        </figure>
        <div className="nav-plus">+</div>
      </nav>
      <div className={`header-mid-text ${displayMenu ? "hide" : "show"}`}>
        <div 
          className="changing-text"
          style={styles}
          >
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
