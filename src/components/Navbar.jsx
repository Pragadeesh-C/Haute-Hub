import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="list">
        <img src={Logo} />
        <li>Electronics</li>
        <li>Vehicles</li>
        <li>Fashion</li>
        <li>Furnitures</li>
        <li>Books</li>
          <button className="dealsButton">Sell</button>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          <Link to="/cart">
            <div className="cart">
              <BsCart3 className="cartIcon" />
            </div>
          </Link>
          <FontAwesomeIcon icon={faUser} className="userIcon" />{" "}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
