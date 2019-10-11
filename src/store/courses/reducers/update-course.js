import {
  ADD_COURSE,
  REMOVE_COURSE,
  EDIT_COURSE,
} from '../actions';

const initialState = {
  video1: {
    title: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
    description: 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!',
    duration: '24 hours',
    creationDate: 'September 22',
    authors: ['Verka Serduchka', 'Iryna Bilyk'],
  },
  video2: {
    title: 'Spring & Hibernate for Beginners (includes Spring Boot',
    description: 'Spring 5: Learn Spring 5 Core, AOP, Spring MVC, Spring Security, Spring REST, Spring Boot 2, Thymeleaf, JPA & Hibernate',
    duration: '41 hours',
    creationDate: 'October 4',
    authors: ['Vremia Isteklo'],
  },
  video3: {
    title: 'Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex',
    description: 'Vue JS is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
    duration: '22 hours',
    creationDate: 'October 17',
    authors: ['Nastya Kamenskih'],
  },
  video4: {
    title: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
    description: 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!',
    duration: '24 hours',
    creationDate: 'September 22',
    authors: ['Verka Serduchka', 'Iryna Bilyk'],
  },
  video5: {
    title: 'Spring & Hibernate for Beginners (includes Spring Boot',
    description: 'Spring 5: Learn Spring 5 Core, AOP, Spring MVC, Spring Security, Spring REST, Spring Boot 2, Thymeleaf, JPA & Hibernate',
    duration: '41 hours',
    creationDate: 'October 4',
    authors: ['Vremia Isteklo'],
  },
  video6: {
    title: 'Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex',
    description: 'Vue JS is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
    duration: '22 hours',
    creationDate: 'October 17',
    authors: ['Nastya Kamenskih'],
  },
};

const coursesCollection = new Map([
  [ADD_COURSE, (state, { payload: { id, title, description, duration, creationDate, authors } }) => ({
    ...state,
    [id]: {
      title,
      description,
      duration,
      creationDate,
      authors,
    },
  })],
  [REMOVE_COURSE, (state, { payload: { id } }) => {
    const newState = {...state};

    delete newState[id];

    return newState;
  }],
  [EDIT_COURSE, (state, { payload: { id, title, description, duration, creationDate, authors } }) => ({
    ...state,
    [id]: {
      title,
      description,
      duration,
      creationDate,
      authors,
    },
  })],
]);

export const courses = (state = initialState, action) => {
  if (!coursesCollection.has(action.type)) {
    return state;
  }

  return coursesCollection.get(action.type)(state, action);
};