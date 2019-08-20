import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../logo.svg';

import './header-container.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <Link to="/" className="header__nav-home">
          <img src={logo} alt="logo" />
          <p className="header__nav-home-title">hahan videocourses</p>
        </Link>

        <Link to="/courses" className="header__nav-link">courses</Link>
      </div>
      <div className="header__auth">
        <p>user</p>
        <Link to="/login">login</Link>
      </div>
    </header>
  );
};

export default Header;
