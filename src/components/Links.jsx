import React from "react";

const Links = ({ onClick }) => {
  return (
    <div className="linkContainer">
      <button className="button" onClick={onClick}>
        See Favorites
      </button>
      <button className="button" onClick={onClick}>
        See All Kitties
      </button>
    </div>
  );
};

export default Links;