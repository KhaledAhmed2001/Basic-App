import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { productID } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3004/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <>
      {product && <h1>Product Details {product.id}</h1>}
      <hr></hr>
      <div key={product.id} style={{ padding: "5px" }}>
        <img
          src={product.image}
          className="card-img-top"
          style={{ maxWidth: "300px", padding: "5px 0" }}
        />
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.category}</p>
        <button className="btn btn-success mt-3">price {product.price}</button>
      </div>
    </>
  );
}

export default ProductDetails;
