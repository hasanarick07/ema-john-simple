import React from "react";
import image from "../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={image} alt="" />
      <div>
        <a href="/Shop">Shop</a>
        <a href="/Order">Order</a>
        <a href="/Inventory">Inventory</a>
        <a href="/About Us">About Us</a>
      </div>
    </nav>
  );
};

export default Header;
