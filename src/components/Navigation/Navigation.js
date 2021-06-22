import React from "react";

import InfoSection from "../InfoSection/InfoSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./navigation-bar.scss";

const Navigation = () => {
  return (
    <header>
      <InfoSection />
      <div className="nav-container">
        <div className="nav__logo">
          <h3>Frisco ISD</h3>
        </div>
        <div className="nav__items">
          <div className="items__dropdown">
            <p className="active">News</p>
            <div className="display-hover">
              <p className="color-white">District News</p>
              <p>Inside Frisco ISD</p>
              <p>Connect With Frisco ISD</p>
              <p>Frisco ISD Athletics News</p>
            </div>
          </div>
          <div className="items__dropdown">
            <p>About</p>
            <div className="display-hover">
              <p>Board of Trustees</p>
              <p>Bond Programs</p>
              <p>Calendars</p>
              <p>Community Folder</p>
              <p>District Leadership</p>
              <p>District of Innovation</p>
              <p>District Overview</p>
              <p>Mission, Vision & Beliefs</p>
            </div>
          </div>
          <div className="items__nav-department">
            <p>Department</p>
          </div>
          <div className="items__nav-schools">
            <p>Schools</p>
          </div>
          <div className="items__nav-employment">
            <p>Employment</p>
          </div>
          <div className="items__nav-more">
            <p>
              More{" "}
              <FontAwesomeIcon
                className="info-icons active"
                icon={faCaretDown}
              />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
