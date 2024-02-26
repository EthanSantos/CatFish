import { useState } from "react";
import Card from "./components/Card";
import Information from "./components/Information";
import Chat from "./components/Chat";
import Links from "./components/Links";
import "./components/Card.css";
import { CatsProvider } from "./components/CatsProvider";
import DisplayCats from "./components/DisplayCats";

function App() {
  const descriptions = [
    {
      Age: "20 Years Young",
      Breed: "Maine Coon",
      PreferredActivities:
        "She loves to perch on high surfaces and observe the world below. She enjoys interactive play with feather toys and chasing laser pointers.",
      About:
        "She is a gentle giant with a luxurious, fluffy coat. She's sociable and enjoys the company of both humans and other cats. She has a sweet disposition and loves to be pampered with gentle brush strokes.",
      IdealHome:
        "A spacious home with tall cat trees and cozy spots for lounging. She would thrive in a household with a family willing to engage in interactive play and provide her with the attention she craves.",
    },
    {
      Age: "2 Years Young",
      Breed: "Bombay",
      PreferredActivities:
        "He is a playful and active cat who enjoys chasing after balls and engaging in agility exercises. He's also a fan of puzzle feeders that challenge his intelligence.",
      About:
        "He has sleek black fur and striking yellow eyes. He's a curious and adventurous cat who loves exploring every nook and cranny. He is known for his friendly nature and ability to make friends with anyone, including other pets.",
      IdealHome:
        "An active household with plenty of interactive toys and opportunities for play. He would do well with a family that appreciates his playful energy and can provide a stimulating environment.",
    },
    {
      Age: "1 Years Young",
      Breed: "Siamese",
      PreferredActivities:
        'She is a vocal and social cat who loves to "talk" to her humans. She enjoys curling up in warm spots and is fascinated by puzzle toys that challenge her problem-solving skills.',
      About:
        "She has striking blue almond-shaped eyes and a sleek, short coat with distinctive color points. She's a loving and affectionate cat who thrives on human companionship. She is known for her inquisitive nature and playful antics.",
      IdealHome:
        "A home with a loving family that can provide plenty of attention and playtime. She would do well in a quieter environment where she can form a close bond with her human companions.",
    },
  ];

  const [currentPage, setCurrentPage] = useState("MainPage");

  function loadCats() {
    console.log("Catz");
    setCurrentPage("LikedCats");
  }

  function loadMain() {
    setCurrentPage("MainPage");
  }

  return (
    <CatsProvider>
      <div className="App">
        {currentPage === "MainPage" ? (
          <>
            <Card />
            <div className="right-side">
              <Information descriptions={descriptions} />
              <div className="bottom_right">
                <Chat />
                <Links onClick={loadCats} />
              </div>
            </div>
          </>
        ) : (
          <div className="fav-container">
            <DisplayCats />
            <button className="go-back-btn button" onClick={loadMain}>
              Back to Main
            </button>
          </div>
        )}
      </div>
    </CatsProvider>
  );
}

export default App;