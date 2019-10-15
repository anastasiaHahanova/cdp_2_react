import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SimpleBreadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Selector from '../../components/selector/selector';
import { authors as allAuthors } from '../../store/authors';

import {
  selectCourses,
} from '../../store';

import './course-page.scss';

const getTodayDate = () => {
  var today = new Date();

  return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
};

const CoursePage = ({ location }) => {
  const courseId = location.pathname.split('/').pop();
  const courses = useSelector(selectCourses);
  const data = courseId === 'new' ? {
      authors: [],
      creationDate: getTodayDate(),
      description: '',
      duration: '2',
      image: '',
      title: '',
  } : courses[courses.findIndex(course => course.id === courseId)];

  return (
    <section>
      <SimpleBreadcrumbs title={data.title} />
      <form>
        <div className="course-form__container">
          <TextField
            id="standard-uncontrolled"
            label="Name"
            defaultValue={data.title}
            margin="normal"
          />
          <TextField
            id="standard-uncontrolled"
            label="Image"
            type="textarea"
            defaultValue={data.image}
            margin="normal"
          />
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={data.creationDate}
          />
          <TextField
            id="standard-uncontrolled"
            label="Duration"
            type="number"
            defaultValue={data.duration}
            margin="normal"
          />
        </div>

        <label
          id="description"
          className="course-form__description-title"
        >
          Description
        </label>
        
        <textarea
          className="course-form__description"
          htmlFor="description"
          placeholder="write..."
          defaultValue={data.description}
        >
        </textarea>

        <legend className="course-form__description-title">Authors' List</legend>
        <Selector options={allAuthors} currentAuthors={data.authors} />

        <div className="course-form__buttons">
          <Button size="small" color="primary">
            Save
          </Button>
          <Link
            to="/courses"
            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall"
          >
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default CoursePage;
