// Cart.jsx
import React from "react";
import "./Cart.css"; 
import InfoBox from "./Infobox";
import Image from "../Images/Image1.jpg";
import { Products } from "./Products";
import { AsliP } from "./AsliP";



function Cart() {
  
    
    return (
        <div className="cart">
            {Products.map((product)=>(
                <AsliP data ={product} />
                
            ))}
          
        </div>
    );
}

export default Cart;

