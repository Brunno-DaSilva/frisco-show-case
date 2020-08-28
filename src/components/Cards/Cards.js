import React from "react";

import "./cards.scss";

const Cards = ({ title, imageUrl, description }) => {
  return (
    <div className="cards">
      <div className="cards__top">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="cards__info">
        <h2>{title}</h2>
        <div>
          <p>{description}</p>
        </div>
        <button>more info</button>
      </div>
    </div>
  );
};

export default Cards;
