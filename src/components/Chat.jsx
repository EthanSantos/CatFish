import React from "react";

const Chat = () => {
  return (
    <div className="chatContainer">
      <div className="upper-chat">
        <div className="left-message">Mew Mew</div>
        <div className="right-message">Heyyyyyyyyy</div>
        <div className="left-message">Meow Meow Pls Adopt!</div>
        <div className="right-message">Okay, anything for you</div>
      </div>
      <div>
        <input className="text-box" placeholder="Talk to kitty" type="text" />
      </div>
    </div>
  );
};

export default Chat;