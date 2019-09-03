import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from '@material-ui/core/Input';

import './login.scss';

const LOGIN_REGEX: RegExp = /^[a-zA-Z]+$/g;
const PASSWORD_REGEX: RegExp = /^[a-zA-Z0-9]+$/g;

export interface LoginProps {
  login: string,
  password: string,
}

const LoginPage = () => {
  const [state, setState] = useState({
    login: '',
    password: '',
  });

  const onLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value === '' || LOGIN_REGEX.test(value)) {
      setState((state) => { 
        return { ...state, login: value };
      });
    }
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value === '' || PASSWORD_REGEX.test(value)) {
      setState((state) => { 
        return { ...state, password: value };
      });
    }
  };

  return (
    <main className="login-section__container">
      <div className="login-section__wrapper">
        <form className="login-section shadow">
          <Input
            className="login-section__field"
            autoFocus={true}
            required={true}
            value={state.login}
            onChange={onLoginChange}
          />
          <Input
            className="login-section__field"
            type="password"
            required={true}
            value={state.password}
            onChange={onPasswordChange}
          />
          <Link to="/courses" className="login-section__submit">Login</Link>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
