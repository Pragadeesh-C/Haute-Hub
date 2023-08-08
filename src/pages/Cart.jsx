import React from "react";
import "../styles/Cart.css";
import Product from "../assets/img.png";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="heads">
        <div className="item">
          <h3>Item</h3>
        </div>
        <h3>Price</h3>
        <h3>Qty</h3>
        <h3>Subtotal</h3>
      </div>
      <div className="products">
        <div className="items">
          <img src={Product} className="image" />
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
          1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
        </div>
        <div className="price">$4349.00</div>
        <div className="qty">
          <input type="number" className="qtyInput" />
        </div>
        <div className="subtotal">
          $4349.00
          <div className="delete">
            <AiOutlineCloseCircle className="deleteIcon" />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="continue">Continue Shopping</button>
        <button className="clearCart">Clear Shopping Cart</button>
      </div>
    </div>
  );
};

export default Cart;
