import React, { Component } from 'react';
import NavBar from './NavBar'
// A modifier selon si notre logo sera svg ou dans le fichier logo.js
// import logo from './logo.svg';

import './Header.css';
 
  class Header extends Component {
    render() {
      return (
        <div>
          <NavBar />
        </div>
      );
    }
  }

export default Header;
