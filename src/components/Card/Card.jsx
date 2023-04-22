import React from "react";
import "./Card.css";

const Card = ({img,color}) => {
  
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={img} alt="" />
      <button className="c-button">Know More</button>
    </div>
  );
};

export default Card;
