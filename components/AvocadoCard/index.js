import React from "react";
import Link from "next/link";
// styles
import styles from "@styles/avocadoCard.module.css";

export const AvocadoCard = ({ id, name, price, image }) => {
  return (
    <Link href={`/detail/${id}`}>
      <div className={styles.container}>
        <img src={image} />
        <div className={styles.detail}>
          <h1>{name}</h1>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};
