import { useState, useEffect } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
const apiKey =
  "live_7WuvcHp9i8PCrYX8TCCjLBTGWBYrBePyokoKu6MsumLbGCxNoo1EsgCggF5fcrBg";
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

const headers = {
  "x-api-key": apiKey,
};

const Card = () => {
  const [cats, setCats] = useState([]);
  const [lastDirection, setLastDirection] = useState();
  const [likedCats, setLikedCats] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(apiUrl, { headers });
        setCats(response.data);
      } catch (error) {
        console.error("Error occurred:", error.response.data);
      }
    };

    fetchImages();
  }, []);

  const swiped = (direction, swipedCat) => {
    setLastDirection(direction);
    if (direction == "right") {
      // add it to the array of cats that are liked
      setLikedCats(likedCats.concat({ id: swipedCat.id, url: swipedCat.url }));
    }
    setCats(cats.filter((cat) => cat.id !== swipedCat.id)); // remove cat
    console.log(likedCats);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!"); // fully deleted
  };

  {
    if (cats.length === 0) {
      // no more cats to display
      return (
        <div>
          <h1>No more cats to display!</h1>
        </div>
      );
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
                <div> Sphynx Cat @ Dancing Cat</div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
