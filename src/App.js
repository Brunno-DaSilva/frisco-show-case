import React, { Component } from "react";

// import LandingPage from "./components/LandingPage/LandingPage";
import Navigation from "./components/Navigation/Navigation";
import NavigationTwo from "./components/Navigation_2/NavigationTwo";
import Cards from "./components/Cards/Cards";
import { ReactComponent as SVG } from "./components/assets/wave.svg";

import "./App.css";

class App extends Component {
  state = {
    cards: [
      {
        title: "COVID-19",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505021/ben-mullins-je240KkJIuA-unsplash_1_svdhzv.jpg",
        description: "Some description about the topic",
        id: 1,
      },
      {
        title: "Back to School",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505164/deleece-cook-zzjLGF_6dx4-unsplash_1_hjkqeh.jpg",
        description: "Some description about the topic",
        id: 2,
      },
      {
        title: "Instruction",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505085/tim-mossholder-WE_Kv_ZB1l0-unsplash_1_x8iqrj.jpg",
        description: "Some description about the topic",
        id: 3,
      },
      {
        title: "COVID-19 FAQS",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505231/element5-digital-OyCl7Y4y0Bk-unsplash_x8xsvz.jpg",
        description: "Some description about the topic",
        id: 4,
      },
      {
        title: "Meal Benefits",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1598507472/qearl-hu-0aQuUvhlvvk-unsplash_idcwtz.jpg",
        description: "Some description about the topic",
        id: 5,
      },
      {
        title: "Enrollment",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505291/neonbrand-zFSo6bnZJTw-unsplash_1_q3dvgg.jpg ",
        description: "Some description about the topic",
        id: 6,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <div class="titleNav">Second Nav</div>
        <NavigationTwo />

        <div className="cards-holder">
          {this.state.cards.map(({ id, ...otherSectionProps }) => (
            <Cards key={id} {...otherSectionProps} />
          ))}
        </div>

        <SVG />
      </div>
    );
  }
}

export default App;
