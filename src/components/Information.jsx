import React from "react";
import { useCats } from "./CatsProvider";

const Information = () => {
  // update every time a new cat is changed

  const { descriptions } = useCats();

  return (
    <div className="infoContainer">
      <div>Age: {descriptions.age}</div>
      <div>Breed: {descriptions.breed}</div>
      <div>Preferred Activities: {descriptions.prefer}</div>
      <div>About: {descriptions.about}</div>
      <div>Ideal Home: {descriptions.ideal}</div>
    </div>
  );
};

export default Information;