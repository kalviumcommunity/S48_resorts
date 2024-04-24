// Landingpage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

const Landingpage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <Link to="/login" className="button">Login</Link>
        <Link to="/Data" className="button">Data</Link>
        <div className="animation start-home"></div>
      </nav>
      <header className="header">
        <div className="title">
          <h1>Discover Serenity: Your Escape Awaits at Our Luxurious Resort</h1>
          <div className="description">
            <p>Welcome to our resort website! Explore our accommodations, dining options, activities, and more to plan your perfect getaway. From cozy rooms to exciting adventures, we have everything you need for an unforgettable stay. Book your escape today and let the relaxation begin!</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Landingpage;
