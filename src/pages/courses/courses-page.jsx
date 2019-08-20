import React from 'react';

import CourseCard from './course-card/course-card';
import './courses-page.scss';

const CoursesPage = () => {
  return (
    <section className="cards-wrapper">
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
    </section>
  );
}

export default CoursesPage;