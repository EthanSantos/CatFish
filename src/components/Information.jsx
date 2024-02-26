import React from "react";

const Information = ({ descriptions }) => {
  const rand = Math.floor(Math.random() * 3);
  const age = descriptions[rand].Age;
  const breed = descriptions[rand].Breed;
  const prefer = descriptions[rand].PreferredActivities;
  const about = descriptions[rand].About;
  const ideal = descriptions[rand].IdealHome;

  return (
    <div className="infoContainer">
      <div>Age: {age}</div>
      <div>Breed: {breed}</div>
      <div>Preferred Activities: {prefer}</div>
      <div>About: {about}</div>
      <div>Ideal Home: {ideal}</div>
    </div>
  );
};

export default Information;
