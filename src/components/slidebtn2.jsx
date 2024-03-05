import React, { useState } from "react";
import "./slidebtn2.css";
import Logo from "../Images/slidebtn2.png";
import { Link } from "react-router-dom";
import Racing from "./Pages/Racing";

function Slidebutton2({onClick}){


    return(
        <>
          <button onClick={onClick}>
            <img src={Logo}  className="slidebtn2"></img>
          </button>
    
        </>

    );
}

export default Slidebutton2;