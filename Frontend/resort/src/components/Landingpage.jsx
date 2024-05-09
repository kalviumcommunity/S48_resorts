// Landingpage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

const Landingpage = () => {
  return (
    <div className="landing-page"> 
      <nav className="navLanding">
        <Link to="/login" className='navitms'>Login</Link>
        <Link to="/signup" className='navitms'>Signup</Link>
      </nav>

      <header className="header">
        <div className="title">
          <h1>Your Escape Awaits at Our Luxurious Resorts</h1>
        </div>
      </header>
      <div>
        <div className="description">
          <p>Welcome to our resort website! <br/> Explore our website which is filled with a lot of resorts, select the best you want. We have everything you need  to plan your perfect getaway. Book your escape today and let the relaxation begin!</p>
        </div>
        <div>
          <button id='startbtn'>Explore -> </button>
        </div>
      </div>   
    </div>
  );
}

export default Landingpage;
