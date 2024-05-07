import React from "react";
import Graphic from "../assets/investment-calculator.png";

function Header() {
  return (
    <header id="header">
      <img src={Graphic} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
