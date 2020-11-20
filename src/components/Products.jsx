import React, { useState } from "react";
import Product from "./Product";
import "./Products.css";

function Products(props) {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Shirt",
      price: 29.99,
    },
    {
      id: "p2",
      title: "Blue Carpet",
      price: 99.99,
    },
    {
      id: "p3",
      title: "Coffee Mug",
      price: 8.99,
    },
    {
      id: "p4",
      title: "The Book - Limited Edition",
      price: 15.99,
    },
  ]);

  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={props.addToCart}
        />
      ))}
    </div>
  );
}

export default Products;
