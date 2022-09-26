import React from "react";
import logo from "./assets/Flixia-logo.PNG";


export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <figure>
                <img src={logo} alt="company-logo"/>
            </figure>
            <p>
              &#169; {currentYear} Flixia.com, Inc. All rights reserved. 
              <span>Terms </span> 
              |<span> Privacy </span>| <span>CA Privacy </span> | <span> Copyright </span> 
              | <span> Cookies </span>
            </p>
        </footer>
    )
}