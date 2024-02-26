import { useState } from "react";
import Card from "./components/Card";
import Information from "./components/Information";
import Chat from "./components/Chat";
import Links from "./components/Links";
import "./components/Card.css";
import { CatsProvider } from "./components/CatsProvider";
import DisplayCats from "./components/DisplayCats";

function App() {
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
              <Information />
              <div className="bottom_right">
                <Chat />
                <Links onClick={loadCats} />
              </div>
            </div>
          </>
        ) : (
          <div>
            <DisplayCats />
            <button onClick={loadMain}>Back to Main</button>
          </div>
        )}
      </div>
    </CatsProvider>
  );
}

export default App;
