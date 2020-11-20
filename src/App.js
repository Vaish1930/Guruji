import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <div className="app">
      <Header cart={cart} />
      <Products addToCart={addToCart} />
    </div>
  );
}

export default App;
