// Landingpage.js
import React from 'react';
import './Landingpage.css';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/login">Login</Link>
          <Link to="/UserList">data</Link>  {/* Changed link to Link */}
        </div>
        <div className="title">
          <h1>Discover Serenity: Your Escape Awaits at Our Luxurious Resort</h1>
          <p>Welcome to our resort website! Explore our accommodations, dining options, activities, and more to plan your perfect getaway. From cozy rooms to exciting adventures, we have everything you need for an unforgettable stay. Book your escape today and let the relaxation begin!</p>
        </div>
      </header>
      <main>
        <div className="content">
          <div className="profile">
            <img src="https://tse3.mm.bing.net/th?id=OIP._6UKvrLwZ8o7ZASqWzVGqAHaE7&pid=Api&P=0&h=180" alt="Profile Image" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landingpage;
