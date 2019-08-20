import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CoursesPage from './pages/courses/courses-page';
import CoursePage from './pages/course/course-page';
import LoginPage from './pages/login/login-page';

import Header from './components/header/header-container';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/courses" component={Courses} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Courses({ match }) {
  return (
    <main>
      <Route path={`${match.path}/:id`} component={CoursePage} />
      <Route path={`${match.path}/new/:id`} component={CoursePage} />
      <Route path={`${match.path}/edit/:id`} component={CoursePage} />
      <Route
        exact
        path={match.path}
        component={CoursesPage}
      />
    </main>
  );
}

export default App;
