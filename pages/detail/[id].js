import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        });
    }
  }, [query.id]);

  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
};

export default DetailPage;
