import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="connect-with-team">
        <div className="connect">Connect with our team</div>
        <div className="our-team">
          Our team is happy to answer your questions about our video tools.
        </div>
        <div className="customers-questions">
          <div>
            <span className="good-font">
              <FontAwesomeIcon icon={faCheck} className="check" />
            </span>
            <span>How your business uses video</span>
          </div>
          <div>
            <span className="good-font">
              <FontAwesomeIcon icon={faCheck} className="check" />
            </span>
            <span>Get pricing information</span>
          </div>
          <div>
            <span className="good-font">
              <FontAwesomeIcon icon={faCheck} className="check" />
            </span>
            <span className="vimeo">
              Learn about other great brands using Flixia
            </span>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <div className="existing-user">
          Existing user looking for support?
          <span>Find it here</span>
        </div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Business Email" />
        <input type="text" placeholder="+234 808-354-8296" />
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Company Size" />
        <input
          type="text"
          placeholder="What are you looking to do with video?"
        />
        <div className="input-checkbox">
          <input type="checkbox" />
          <span>
            I agree to receive newsletters, product updates, and exclusive
            offers from Vimeo.
          </span>
        </div>
        <button className="contact-btn">Contact our team</button>
      </form>
    </div>
  );
};
