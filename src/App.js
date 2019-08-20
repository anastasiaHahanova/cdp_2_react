import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <h2>Courses</h2>

      <ul>
        <li>
          <Link to={`${match.url}/new`}>New Course</Link>
        </li>
        <li>
          <Link to={`${match.url}/edit`}>Edit Course</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={CoursePage} />
      <Route
        exact
        path={match.path}
        component={CoursesPage}
      />
    </main>
  );
}

export default App;
