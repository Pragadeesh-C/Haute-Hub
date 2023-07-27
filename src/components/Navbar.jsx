import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <img src={Logo} />
        <li>Electronics</li>
        <li>Vehicles</li>
        <li>Fashion</li>
        <li>Furnitures</li>
        <li>Books</li>
        <li>
          <button className="dealsButton">Sell</button>
        </li>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          <div className="cart">
            <BsCart3 className="cartIcon" />
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
