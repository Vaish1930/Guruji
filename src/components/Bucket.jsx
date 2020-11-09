import React, { useEffect, useState } from "react";
import "./Bucket.css";
import { useStateValue } from "../StateProvider";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnItem,
  decrementQuatity,
  deleteProduct,
  incrementQuantity,
  selectProducts,
} from "../features/cartSlice";

function Bucket() {
  // const [products, setProducts] = useState([
  //   { id: 1, title: "Biscuit", qty: 0, price: 2 },
  //   { id: 2, title: "Maggi", qty: 0, price: 5 },
  //   { id: 3, title: "ColdCoffee", qty: 0, price: 50 },
  // ]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  // const [{ products }, dispatch] = useStateValue();

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    // const products = Cookie.getJSON("products");
    // dispatch({
    //   type: "SET_INITIAL_STATE",
    //   payload: {
    //     products: products ? products : [],
    //   },
    // });
  }, []);

  // useEffect(() => {
  //   Cookie.set("products", products, { path: "/" });
  // }, [products]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    if (title && price > 0) {
      dispatch(addAnItem({ title, price }));
      setPrice(0);
      setTitle("");
    }
  };

  const handleQuantity = (productId, type) => {
    dispatch({
      type,
      payload: {
        id: productId,
      },
    });
  };

  return (
    <div className="bucket">
      <h2>Add Products</h2>
      <form action="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button type="submit" onClick={handleAddProduct}>
          Add
        </button>
      </form>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        {products.map((product) => (
          <div key={product.id} className="product_items">
            <p className="product_title">
              {product.title} <span>&#x20B9;{product.price}</span>
            </p>
            <div className="buttons">
              <button
                disabled={product.qty === 0}
                onClick={() => dispatch(decrementQuatity({ id: product.id }))}
              >
                -
              </button>
              <p>{product.qty}</p>
              <button
                onClick={() => dispatch(incrementQuantity({ id: product.id }))}
              >
                +
              </button>
              <button
                onClick={() => dispatch(deleteProduct({ id: product.id }))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bucket;
