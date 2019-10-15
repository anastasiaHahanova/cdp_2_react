import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/login/login-page';
import Authorization from './authorization';
import CoursesRoute from './route-courses/route-courses';

const courses = Authorization(CoursesRoute);

const NoMatch = () => <h2>404</h2>;

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={courses} />
      <Route exact path="/login" component={LoginPage} />
      <Route path="/courses" component={courses} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default Routing;
