import React, { Component } from "react";
import { Redirect } from 'react-router';

let isAuthenticated = true;

const Authorization = WrappedComponent => {
  return class AuthorizationHOC extends Component {
    render() {
      if (!isAuthenticated) {
        return <Redirect to='/login' />
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default Authorization;
