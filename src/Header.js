import React from 'react';
import logo from './BSGriggs.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="seperator"></span>
        <button> Benjamin Griggs</button> 
        <button> Twitter</button>
        <button> Minecraft Server</button>
        <button> Feedback</button>
    </div>
  );
}

export default Header;
