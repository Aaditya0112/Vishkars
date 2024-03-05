import React from "react";
import "./Racing.css";
import background from "./2.jpg";
import "./ElectricCar.css"

function ElectricCar() {
  return (
    <>
      <div className="background">
        <img src={background} alt="logo" className="background" />
        <p className="abovetext">Electric Car</p>
      </div>
    </>
  );
}

export default ElectricCar;