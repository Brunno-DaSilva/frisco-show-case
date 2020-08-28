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
          <p className="active">News</p>
          <p>About</p>
          <p>Department</p>
          <p>Schools</p>
          <p>Employment</p>
          <p>
            More{" "}
            <FontAwesomeIcon className="info-icons active" icon={faCaretDown} />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
