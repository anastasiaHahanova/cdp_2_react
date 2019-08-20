import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import SimpleBreadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import './course-page.scss';

const CoursePage = ({ match }) => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;

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
        <FormControl component="fieldset">
          <legend className="course-form__description-title">Authors' List</legend>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
              label="Gilad Gray"
            />
            <FormControlLabel
              control={<Checkbox checked={jason} onChange={handleChange('jason')} value="jason" />}
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
        </FormControl>
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
