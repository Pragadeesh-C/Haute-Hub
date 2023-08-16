import React from "react";
import CardImage from "../assets/img.png";
import "../styles/ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productcard">
      <div className="productDetails">
        <img src={CardImage} className="cardImage" />
        <div className="title">EX DISPLAY: MSI Pro 16 Flex-036AU 15.6</div>
        <div className="priceStriked">$499. 00</div>
        <div className="productPrice">$499.00</div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
