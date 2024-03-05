// InfoBox.js

import React from "react";
import "./Infobox.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Image from "../Images/Image1.jpg";

function InfoBox({ id, carName, miles, isNew, price }) {
  // const Products = [
  //   { id: 0, name: "Porche 2311", price: 20000 ,image:Image },
  //   { id: 1, name: "Mercedes 123", price: 40000 },
  // ];

  const handleBuyClick = (id) => {
    return ( 
      <div>{ Products[id]}</div>
    );

  };

  return (
    <div className="info-box">
      <h2>{carName}</h2>
      <p>Miles: {miles}</p>
      <p>{isNew ? "New Car": "Second Hand"}</p>

        <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
}

export default InfoBox;



