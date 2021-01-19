import React from "react";
import styles from "@styles/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>
            <h1>Hecho con</h1>
            <p>Next.js - React.js</p>
        </div>
      </div>
    </div>
  );
};
