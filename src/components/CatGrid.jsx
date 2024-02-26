import React from "react";

const CatGrid = ({ cat, names }) => {
  return (
    <div
      className="grid-item"
      style={{ backgroundImage: "url(" + cat.url + ")" }}
    >
      <div className="title">{names[Math.floor(Math.random() * names.length)]}</div>
    </div>
  );
};

export default CatGrid;