import React from "react";
import CardImage from "../assets/img.png";
import "../styles/ProductCard.css";

const ProductCard = (props) => {
  console.log(props)
  return (
    <div className="productcard">
      <div className="productDetails">
        <img src={props.imgUrl} className="cardImage" />
        <div className="title">{props.name}</div>
        <div className="priceStriked">$499. 00</div>
        <div className="productPrice">$499.00</div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
