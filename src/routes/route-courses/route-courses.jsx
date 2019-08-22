import React from "react";
import { Route } from "react-router-dom";

import CoursePage from '../../pages/course/course-page';
import CoursesPage from '../../pages/courses/courses-page';

const CoursesRoute = ({ match }) =>{
  return (
    <main>
      <Route path={`${match.path}/:id`} component={CoursePage} />
      <Route path={`${match.path}/new/`} component={CoursePage} />
      <Route
        exact
        path={match.path}
        component={CoursesPage}
      />
    </main>
  );
}

export default CoursesRoute;
