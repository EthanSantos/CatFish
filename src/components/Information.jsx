import React from "react";
import { useCats } from "./CatsProvider";

const Information = () => {
  // update every time a new cat is changed

  const { descriptions } = useCats();

  return (
    <div className="infoContainer">
      <div><span style={{ fontWeight: 'bold' }}>Age:</span> {descriptions.age}</div>
      <div><span style={{ fontWeight: 'bold' }}>Breed:</span>  {descriptions.breed}</div>
      <div><span style={{ fontWeight: 'bold' }}>Preferred Activities:</span> {descriptions.prefer}</div>
      <div><span style={{ fontWeight: 'bold' }}>About:</span> {descriptions.about}</div>
      <div><span style={{ fontWeight: 'bold' }}>Ideal Home:</span> {descriptions.ideal}</div>
    </div>
  );
};

export default Information;