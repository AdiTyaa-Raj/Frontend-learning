import React from 'react';  
import siterraIcon from '../assets/siterra.png'; 
import './Navbar.css';  
  
const Navbar = () => {  
  return (  
    <div className="navbar">  
      <div className='navbar_image'>
        <img src={siterraIcon} alt="Siterra Logo" /> 
      </div>
      <div className='navbar_content'>
        {/* <h1>Navbar-- contenttt</h1> */}
      </div>
    </div>  
  );  
};  
export default Navbar;  
