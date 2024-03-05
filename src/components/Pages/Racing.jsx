import React from "react";
import "./Racing.css";
import background from "./3.jpg";

function Racing() {
  return (
    <>
      <div className="background">
        <img src={background} alt="logo" className="background" />
        <p className="abovetext">RACING</p>
      </div>
    </>
  );
}

export default Racing;
