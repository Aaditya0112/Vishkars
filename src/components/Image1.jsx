// Image1.jsx
import React, { useState } from "react";
import "./Image1.css";
import Image from "../Images/Image1.jpg";
import Image2 from "../components/Pages/3.jpg";
import Slidebutton from "../components/slidebtn";
import Slidebutton2 from "./slidebtn2";
import InfoBox from "./Infobox";
import Cart from "./Cart"; // Import the Cart component


function Image1() {
  const [currentImage, setCurrentImage] = useState(Image);
  const [carInfo, setCarInfo] = useState({
    carName: "Car Model",
    miles: 0,
    isNew: true,
    price: 20000, // Add a price property for each car
  });

  const [cartItems, setCartItems] = useState([]);

  const changeImage = () => {
    setCurrentImage((prevImage) => (prevImage === Image ? Image2 : Image));
    setCarInfo((prevInfo) =>
      prevInfo.isNew
        ? { carName: "Ferrari S1", miles: 100, isNew: false, price: 25000 }
        : { carName: "Buggati V1", miles: 0, isNew: true, price: 20000 }
    );
  };

  const addToCart = () => {
    setCartItems((prevItems) => [...prevItems, carInfo]);
  };

  return (
    <div className="image-container">
      <img src={currentImage} alt="Car" />
      <InfoBox {...carInfo} onBuyClick={addToCart} />
      <Slidebutton onClick={changeImage} />
      <Slidebutton2 onClick={changeImage} />
      
    </div>
  );
}

export default Image1;



