import { useState, useEffect } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import { useCats } from "./CatsProvider";

const Card = () => {
  const { cats, names, likedCats, lastDirection, handleSwipe } = useCats();

  const swiped = (direction, swipedCat) => {
    handleSwipe(direction, swipedCat);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!"); // fully deleted
  };

  if (cats.length === 0) {
    // no more cats to display
    return <div className="no-more-cats cardContainer"></div>;
  }
    {
        if (cats.length === 0) {
            // no more cats to display
            return <div className="no-more-cats cardContainer"></div>;
        }
    }

  return (
    <div>
      <div className="cardContainer">
        {cats.map((cat) => (
          <TinderCard
            className="swipe"
            key={cat.id}
            onSwipe={(dir) => swiped(dir, cat)}
            onCardLeftScreen={() => outOfFrame(cat.id)}
          >
            <div
              style={{ backgroundImage: "url(" + cat.url + ")" }}
              className="card"
            >
              <div className="card-info">
                <div> Jimmy </div>
                <div> Cat @ Dancing Cat</div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
    return (
        <div>
            <div className="cardContainer">
                {cats.map((cat) => (
                    <TinderCard
                        className="swipe"
                        key={cat.id}
                        onSwipe={(dir) => swiped(dir, cat)}
                        onCardLeftScreen={() => outOfFrame(cat.id)}
                    >
                        <div
                            style={{ backgroundImage: "url(" + cat.url + ")" }}
                            className="card"
                        >
                            <div className="card-info">
                                <div> {names[Math.floor(Math.random() * names.length)]} </div>
                                <div> @ Dancing Cat</div>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
};

export default Card;
