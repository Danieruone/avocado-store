import React, { useState, useEffect } from "react";
import { AvocadoCard } from "@components/AvocadoCard";
import styles from "@styles/home.module.css";

const axios = require("axios");

export default function Home() {
  const [avocados, setAvocados] = useState([]);

  useEffect(async () => {
    axios
      .get("/api/avo")
      .then((res) => setAvocados(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        {avocados.map((avocado) => {
          return <AvocadoCard key={avocado.id} {...avocado} />;
        })}
      </div>
    </div>
  );
}
