import React from "react";

const CatGrid = ({ cat }) => {
  return (
    <div
      className="grid-item"
      style={{ backgroundImage: "url(" + cat.url + ")" }}
    >
      <div className="title">William</div>
    </div>
  );
};

export default CatGrid;
