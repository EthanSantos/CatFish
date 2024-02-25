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
    const [cats, setCats] = useState([])
    const [lastDirection, setLastDirection] = useState()
  const [cats, setCats] = useState([]);

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

    const swiped = (direction, catId) => {
        setLastDirection(direction)
        setCats(cats.filter(cat => cat.id!== catId))
        console.log(cats.length)
    }
    
    fetchImages();
  }, []);

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    {
        if (cats.length === 0){ // no more cats to display
            return (
                <div>
                    <h1>No more cats to display</h1>
                </div>
            )
        }

    }
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

    return (
        <div>
            <div className='cardContainer'>
                {cats.map((cat) =>
                    <TinderCard className='swipe' key={cat.id} onSwipe={(dir) => swiped(dir, cat.id)} onCardLeftScreen={() => outOfFrame(cat.id)}>
                        <div style={{ backgroundImage: 'url(' + cat.url + ')' }} className='card'>
                            <h3>Jimmy</h3>
                        </div>
                    </TinderCard>
                )}
                {console.log(cats)}
            </div>
        </div>
    )
}
  return (
    <div>
      <div className="cardContainer">
        {cats.map((cat) => (
          <TinderCard
            className="swipe"
            key={cat.id}
            onCardLeftScreen={() => outOfFrame(cat.id)}
          >
            <div
              style={{ backgroundImage: "url(" + cat.url + ")" }}
              className="card"
            >
              <div className="card-info">
                <div className="name">Jimmy</div>
                <div className="title">Persian Cat @ Dancing Cat</div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
