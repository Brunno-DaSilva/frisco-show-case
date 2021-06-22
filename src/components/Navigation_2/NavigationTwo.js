import React from "react";

// import InfoSection from "../InfoSection/InfoSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./navigation-bar.scss";

const Navigation = () => {
  return (
    <header>
      <div className="nav-container2">
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
          <div className="items__dropdown">
            <p>Department</p>
          </div>
          <div className="items__dropdown">
            <p>Schools</p>
          </div>
          <div className="items__dropdown">
            <p>Employment</p>
          </div>
          <div className="items__dropdown">
            <p>
              More{" "}
              <FontAwesomeIcon
                className="info-icons active"
                icon={faCaretDown}
              />
            </p>
            <div className="display-hover">
              <div className="display-hover_more">
                <div>
                  <p>Parents</p>
                  <p>Students</p>
                  <p>Community</p>
                  <p>Staff</p>
                  <p>Parents</p>
                  <p>Students</p>
                </div>
                <div>
                  <p className="button-colo-g">Parents</p>
                  <p className="button-colo-y">Students</p>
                  <p className="button-colo-lb">Community</p>
                  <p className="button-colo-o">Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-info__icons">
          <div className="container__searchbar">
            <input className="searchbar" type="text" placeholder="Search.." />
            <FontAwesomeIcon
              className="info-icons search-icon"
              icon={faSearch}
            />
          </div>
          <FontAwesomeIcon className="info-icons social" icon={faTwitter} />
          <FontAwesomeIcon className="info-icons social" icon={faFacebook} />
          <FontAwesomeIcon className="info-icons social" icon={faYoutube} />
          <FontAwesomeIcon className="info-icons social" icon={faInstagram} />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
