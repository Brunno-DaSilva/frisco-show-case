import React from "react";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./info-section.scss";

const InfoSection = () => {
  return (
    <div className="top-info">
      <div className="top-info__more">
        <p>Parents</p>
        <p>Students</p>
        <p>Community</p>
        <p>Staff</p>
      </div>
      <div className="top-info__logo">
        <Logo />
      </div>
      <div className="top-info__icons">
        <input className="searchbar" type="text" placeholder="Search.." />
        <FontAwesomeIcon className="info-icons active" icon={faSearch} />
        <FontAwesomeIcon className="info-icons social" icon={faTwitter} />
        <FontAwesomeIcon className="info-icons social" icon={faFacebook} />
        <FontAwesomeIcon className="info-icons social" icon={faYoutube} />
        <FontAwesomeIcon className="info-icons social" icon={faInstagram} />
      </div>
    </div>
  );
};

export default InfoSection;
