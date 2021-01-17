import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import styles from "@styles/detail.module.css";

const DetailPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProduct(data);
        });
    }
  }, [query.id]);

  return (
    <Fragment>
      {product == null ? (
        <h1>Product not found</h1>
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
                  <input placeholder="Quantity"></input>
                  <input type="button" value="Add to Cart"></input>
                </div>
              </div>
            </div>
            <div>
              <h1>About this avocado</h1>
              <p>{product ? 'description' : product.attributes.description}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DetailPage;
