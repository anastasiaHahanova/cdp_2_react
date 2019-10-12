import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import {
  selectCourses,
} from '../../store';

import CourseCard from './course-card/course-card';
import './courses-page.scss';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const CoursesPage = ({ match }) => {
  const classes = useStyles();
  const courses = useSelector(selectCourses);
  const [state, setState] = useState({
    courses: courses,
    isSearched: false,
  });

  const updateCourses = (id) => {
   const updatedSearch =  Object.values(state.courses).filter(course => course.id !== id);
    setState({ ...state, courses: updatedSearch });
    console.log(state);
  };

  const renderCourses = (courses) => {
    return Object.keys(courses).map((key) => {
      const {
        authors,
        creationDate,
        description,
        duration,
        image,
        title,
        id,
      } = courses[key];

      return (
        <CourseCard
          key={id}
          id={id}
          authors={authors}
          imageSrc={image}
          date={creationDate}
          description={description}
          duration={duration}
          title={title}
          updateCourses={updateCourses}
        />
      );
    });
  };

  const handleKeypress = ({key, target}) => {
    if(key === 'Enter'){
      const searchWord = target.value.toLowerCase();
      const foundCourses = Object.values(courses).filter(course => course.title.toLowerCase().includes(searchWord));

      setState({ ...state, courses: foundCourses, isSearched: true });
    }
  };

  return (
    <div>
      <section className="course-managing">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onKeyPress={handleKeypress}
          />
        </div>
        <Link
          to={`${match.url}/new`}
          className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall"
        >
          add course
        </Link>
      </section>
      <section className="cards-wrapper">
        {state.isSearched ? renderCourses(state.courses) : renderCourses(courses)}
      </section>
    </div>
  );
}

export default CoursesPage;
