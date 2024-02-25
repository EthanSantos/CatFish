import { useState } from "react";
import Card from "./components/Card";
import Information from "./components/Information";
import Chat from "./components/Chat";
import Links from "./components/Links";
import "./components/Card.css";
import { CatsProvider } from './components/CatsProvider';

function App() {
  const [currentPage, setCurrentPage] = useState("MainPage")

  function loadCats() {
    console.log("Catz")
    setCurrentPage("LikedCats")
  }

  function loadMain() {
    setCurrentPage("MainPage")
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
                <Links />
                <button onClick={loadCats}>Load Liked Cats</button>
              </div>
            </div>
          </>
        ) : (
          <button onClick={loadMain}>Back to Main</button>
        )}
      </div>
    </CatsProvider>
  );
}

export default App;
