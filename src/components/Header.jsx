import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header({ cart }) {
  return (
    <div className="header">
      <div className="logo">ShopApp</div>
      <div className="nav">
        <div className="cart">
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <p className="badge">{cart.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
