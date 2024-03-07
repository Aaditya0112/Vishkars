import React, { createContext, useState } from "react";
import {Products} from './Products';
export const BuyContext = createContext();


const getCart=()=> {
    let cart={};
    for (let i=1;i<Products.length;i++){
        cart[i]=0;
    }
    return cart;
}

export const BuyContextProvider = (props)=>{
    const[cartItems , setcartItems] = useState(getCart());
    const addToCart = (itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    };
    const removefromCart = (itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    };
    const contextValue = {cartItems,addToCart,removefromCart}
    return <BuyContext.Provider>{props.children}</BuyContext.Provider>
}