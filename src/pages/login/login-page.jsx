import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Input from '@material-ui/core/Input';

import './login.scss';

const LoginPage = () => {
  return (
    <main className="login-section__container">
      <div className="login-section__wrapper">
        <form className="login-section">
          <Input
            className="login-section__field"
            autoFocus="true"
            required="true"
          />
          <Input
            className="login-section__field"
            type="password"
            autoFocus="true"
            required="true" />
          <Link to="/courses" className="login-section__submit">Login</Link>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
