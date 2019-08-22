import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SimpleBreadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Selector from '../../components/selector/selector';
import {authors} from '../../store/authors';

import './course-page.scss';

const CoursePage = ({ match }) => {
  return (
    <main>
      <SimpleBreadcrumbs courseId={match.params.id} />
      <form>
        <div className="course-form__container">
          <TextField
            id="standard-uncontrolled"
            label="Name"
            defaultValue="name1"
            margin="normal"
          />
          <TextField
            id="standard-uncontrolled"
            label="Description"
            type="textarea"
            defaultValue="decr"
            margin="normal"
          />
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
          />
          <TextField
            id="standard-uncontrolled"
            label="Duration"
            type="time"
            defaultValue="01:00"
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
        >
        </textarea>

        <legend className="course-form__description-title">Authors' List</legend>
        <Selector options={authors} />

        <div className="course-form__buttons">
          <Button size="small" color="primary">
            Save
      </Button>
          <Button size="small" color="primary">
            Cancel
      </Button>
        </div>
      </form>
    </main>
  );
}

export default CoursePage;
