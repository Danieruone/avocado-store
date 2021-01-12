import React from "react";
import styles from "@styles/avocadoCard.module.css";

export const AvocadoCard = ({ name, price, image }) => {
  return (
    <div className={styles.container}>
      <img src={image} />
      <div className={styles.detail}>
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
};
