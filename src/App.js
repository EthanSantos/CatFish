import React from "react";
import Card from "./components/Card";
import Information from "./components/Information";
import Chat from "./components/Chat";
import Links from "./components/Links";
import "./components/Card.css";

function App() {
  return (
    <div className="App">
      <Card />
      <div className="right-side">
        <Information />
        <div className="bottom_right">
          <Chat />
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
