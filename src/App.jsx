import { useState } from 'react';
import Navbar from './components/Navbar';
import Image1 from './components/Image1';
import logo from './components/logo';
import Image2 from './components/Image2';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Slidebutton from './components/slidebtn';
import Slidebutton2 from './components/slidebtn2';
import './App.css';
import Racing from './components/Pages/Racing';
import ElectricCar from './components/Pages/ElectricCar';
import Logo2 from "../src/components/Pages/3.jpg";
import Price from './components/Price';
import Cart from './components/Cart';

function App() {
  const [buyButtonClicked, setBuyButtonClicked] = useState(false);
  const [count, setCount] = useState(0);

  const handleBuyButtonClick = () => {
    setBuyButtonClicked(true);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={  <div>
          <Image1 />
          {/* Add other image components as needed */}
          <button onClick={handleBuyButtonClick}>Buy</button>
        </div>}></Route>
        <Route path='/racing' element={<Racing />} />
        <Route path='/electriccar' element={<ElectricCar />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>

      
      
      

      <Footer />
    </>
  );
}

export default App;

