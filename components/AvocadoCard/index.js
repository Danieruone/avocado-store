import React from "react";

export const AvocadoCard = ({ name, price, image }) => {
  return (
    <div>
      <img src={image} />
      <div>
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
};
