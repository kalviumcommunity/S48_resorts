import React from 'react';
import './Landingpage.css';


const Landingpage = () => {
  return (
    <>
      <div className="landing-page-container"> 
        <nav className="navLanding">
          <div id='leftItems'>
            <h2 className='navitms'>RESORT</h2>
          </div>
          <div id="rightItems">
            <a to="/login" className='navitms'>Login</a>
            <a to="/signup" className='navitms'>Signup</a>
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
            <button id='startbtn' >Explore -> </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
