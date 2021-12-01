import React from "react";

const Card = ({image, name}) => {
  return (
    <div>
      <img className="Card" src={image} alt={name} />
    </div>
  )
}

export default Card;
