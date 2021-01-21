import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import styles from "@styles/detail.module.css";

const axios = require("axios");

const DetailPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (query.id) {
      axios
        .get(`/api/avo/${query.id}`)
        .then((response) => setProduct(response.data))
        .catch((err) => console.log(err));
    }
  }, [query.id]);

  return (
    <Fragment>
      {product == null ? (
        <div className={styles.container}>
          <div className={styles.detailContainer}>
            <p>Product not found</p>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.detailContainer}>
            <div className={styles.cartDetail}>
              <img src={product.image} />
              <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>{`SKU: ${product.sku}`}</p>
                <div>
                  <input
                    className={styles.quantityInput}
                    placeholder="Quantity"
                    type="number"
                  ></input>
                  <input
                    className={styles.addToCartButton}
                    type="button"
                    value="Add to Cart"
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <h1>About this avocado</h1>
              <p>{product.attributes.description}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DetailPage;
