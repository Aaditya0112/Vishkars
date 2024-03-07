import React, { useContext, useState } from "react";
import "./Navbar.css";
import Logo from "./logo";
import { Link } from "react-router-dom";
import Racing from "./Pages/Racing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






function Navbar(){
  const [click,setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
    const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  }

    return(
        <>
          <nav className="navbar">
            
            <ul>
                <li><a href="#"><Logo></Logo></a></li> 
                <li><Link to="/" onClick={handleClick}>Home</Link></li>
                <li><Link to="/racing" onClick={handleClick}>Racing</Link></li>
                <li><Link to="/electriccar">Electric Car</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
                <li><a href="#">About Us</a></li>

            </ul>
           
      <div> <i className="fa-solid fa-bars"> </i> </div>
            

          </nav>
    
        </>

    );
}

export default Navbar;
