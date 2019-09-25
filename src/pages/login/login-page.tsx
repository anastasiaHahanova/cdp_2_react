import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux';
import Input from '@material-ui/core/Input';

import {
  selectUser,
  addUserAction,
} from '../../store';

import './login.scss';

const LOGIN_REGEX: RegExp = /^[a-zA-Z]+$/g;
const PASSWORD_REGEX: RegExp = /^[a-zA-Z0-9]+$/g;
const ERROR_EMPTY_LOGIN: string = 'Please enter the field login';
const ERROR_EMPTY_PASSWORD: string = 'Please enter the field password';

export interface LoginProps {
  login: string,
  password: string,
  isValidLogin: boolean,
  isValidPassword: boolean,
}

const LoginPage = () => {
  const [state, setState] = useState({
    login: '',
    password: '',
    isValidLogin: true,
    isValidPassword: true,
  });

  const dispatch = useDispatch();
  console.log('redux', useSelector(selectUser));
  console.log('state', state);

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

  const onFieldBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    console.log('value', value);
    if (value === state.login) {
      console.log('log', value);
      setState({ ...state, isValidLogin: !!value });
    } else if (value === state.password) {console.log('pas', value);
      setState({ ...state, isValidPassword: !!value });
    }
  };

  const getErrorWrapper = (errorMessage: string) => (
    <span className="error">{errorMessage}</span>
  );

  return (
    <main className="login-section__container">
      <div className="login-section__wrapper">
        <form className="login-section shadow">
        <button className="button is-primary" 
          onClick={(e) => {
            e.preventDefault();
            dispatch(addUserAction({login:'tetss', password: 'kek'}));
          }}>
            Add
        </button>
          <Input
            className="login-section__field"
            autoFocus={true}
            required={true}
            value={state.login}
            onChange={onLoginChange}
            onBlur={onFieldBlur}
          />
          {state.isValidLogin ? '' : getErrorWrapper(ERROR_EMPTY_LOGIN)}
          <Input
            className="login-section__field"
            type="password"
            required={true}
            value={state.password}
            onChange={onPasswordChange}
            onBlur={onFieldBlur}
          />
          {state.isValidPassword ? '' : getErrorWrapper(ERROR_EMPTY_PASSWORD)}
          <Link
            to="/courses"
            className="login-section__submit"
          >
            Login
          </Link>
        </form>
      </div>
    </main>
  );
}

const mapDispatchToProps: any = {
  // addUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);