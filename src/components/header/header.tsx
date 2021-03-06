import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

import {
  selectAuthorizedUser,
  selectAuthMessage,
  logoutAction,
} from '../../store';

import './header.scss';

const HeaderComponent = () => {
  const user: string = useSelector(selectAuthorizedUser);
  const authMessage: string = useSelector(selectAuthMessage);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(authMessage === 'logout') {
      dispatch(logoutAction());
    }
  };

  return (
    <header className="header shadow">
      <div className="header__nav">
        <Link to="/" className="header__nav-home">
          <img src={logo} alt="logo" />
          <p className="header__nav-home-title">hahan videocourses</p>
        </Link>

        <Link to="/courses" className="header__nav-link">courses</Link>
      </div>
      <div className="header__auth">
        <p>{user}</p>
        <Link to="/login" onClick={handleClick}>{authMessage}</Link>
      </div>
    </header>
  );
};

export default connect()(HeaderComponent);
