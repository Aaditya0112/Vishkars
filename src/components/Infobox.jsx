// InfoBox.js

import React, { useContext } from "react";
import "./Infobox.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Image from "../Images/Image1.jpg";
import { BuyContext } from "./BuyContext";

const {addtoCart} = useContext(BuyContext);

function InfoBox({ id, carName, miles, isNew, price }) {
  // const Products = [
  //   { id: 0, name: "Porche 2311", price: 20000 ,image:Image },
  //   { id: 1, name: "Mercedes 123", price: 40000 },
  // ];

  



  return (
    <div className="info-box">
      <h2>{carName}</h2>
      <p>Miles: {miles}</p>
      <p>{isNew ? "New Car": "Second Hand"}</p>

        <button onClick={addtoCart}>Buy</button>
    </div>
  );
}

export default InfoBox;



