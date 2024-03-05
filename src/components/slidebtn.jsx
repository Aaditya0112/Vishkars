import React, { useState } from "react";
import "./slidebtn.css";
import Logo from "../Images/slidebtn.png";
import { Link } from "react-router-dom";
import Racing from "./Pages/Racing";
import Logo2 from "../components/Pages/3.jpg"
import Image from "../Images/Image1.jpg"; 
import Image2 from "../components/Pages/3.jpg";

function Slidebutton({onClick}) {


  
  return (
    <>
      <button onClick={onClick}>
        <img src={Logo}  className="slidebtn"></img>
      </button>

    </>

  );
}

export default Slidebutton;