import React, { useState, useEffect } from "react";
// components
import { AvocadoCard } from "@components/AvocadoCard";
import Avocado from "@components/Avocado";
// styles
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
      <div className={styles.title}>
        <h1>Avo</h1>
        <Avocado size={70}/>
        <h1>Store</h1>
      </div>
      <div className={styles.listContainer}>
        {avocados.map((avocado) => {
          return <AvocadoCard key={avocado.id} {...avocado} />;
        })}
      </div>
    </div>
  );
}
