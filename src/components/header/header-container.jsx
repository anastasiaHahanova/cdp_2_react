import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../logo.svg';

import './header-container.css';

const Header = () => {
  return (
    <header class="header">
      <div class="header__nav">
        <Link to="/" class="header__nav-home">
          <img src={logo} alt="logo" />
          <p class="header__nav-home-title">hahan videocourses</p>
        </Link>

        <Link to="/courses/" class="header__nav-link">courses</Link>
      </div>
      <div class="header__auth">
        <p>user</p>
        <Link to="/login/">login</Link>
      </div>
    </header>
  );
};

export default Header;
