import React, { Component } from "react";
import "./landing-page.scss";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-page__img">
          <div className="landing-page__overlay"></div>

          <div className="landing-page__btn">
            <p id="btn--mission">
              <span className="mission"> Our mission</span> <br /> is to know
              every student by
              <span className="by-name"> name </span>&{" "}
              <span className="need">need</span>.
            </p>
            <br />
            <a href="#">More Info</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
