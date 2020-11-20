import React from "react";
import "./Product.css";

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default Product;
