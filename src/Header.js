import React from 'react';
import logo from './BenjaminSGriggs.svg';
import './Header.css';

function Header() {

  return (
    <div className="Header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>About</button> 
        <button>Twitter</button>
        <button>Minecraft Server</button>
        <button>Feedback</button>
    </div>
  );
}

export default Header;
