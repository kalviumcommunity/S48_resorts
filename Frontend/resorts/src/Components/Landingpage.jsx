import React from 'react';
import './Landingpage.css';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <>
      <div className="landing-page-container"> 
        <nav className="navLanding">
          <div id='leftItems'>
            <h2 className='navitms'>RESORT</h2>
          </div>
          <div id="rightItems">
            <Link to="/login" className='navitms'>Login</Link>
            <Link to="/signup" className='navitms'>Signup</Link>
          </div>
        </nav>
        <header className="header">
          <div className="title">
            <h1>Find the best Resorts</h1>
          </div>
        </header>
        <div>
          <div className="description">
            <p>Welcome to our resort website! <br/> Explore our website which is filled with a lot of resorts, select the best you want. We have everything you need  to plan your perfect getaway. Book your escape today and let the relaxation begin!</p>
          </div>
          <div id='startbutton'>
            <button id='startbtn'><Link id='expbtn' to="resortslist">Explore -></Link></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
