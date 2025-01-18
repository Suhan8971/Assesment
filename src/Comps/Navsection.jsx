import React from 'react'
import pic from '../assets/starr-removebg.png'
import { FaGlobe } from "react-icons/fa"; 

const Navsection = () => {
  return (
    <nav className="nav-bar">
      <div className="pic">
        <img src={pic} alt="img1" className="img-1" />
        <p className="mail">/ support@grew.mail</p>
      </div>
      <ul className="nav-un">
        <li>Automation</li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Email Templates</li>
      </ul>
      <p className="faq">Faq</p>
      <div 
        className='lang'>
          <span>En</span>
        <FaGlobe />
      </div>
      <p className="login">Login</p>
      <div className="btn">
        <button>Try Now</button>
      </div>
    </nav>
  );
}

export default Navsection
