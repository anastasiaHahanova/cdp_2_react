import {
  ADD_USER,
  // GET_USER,
} from '../actions';

const initialState = {
  hahanova: {
    login: 'hahanova',
    password: 'qwerty',
  }
};

//items: state.items.filter(user => user.id !== action.id)

const usersCollection = new Map([
  // [ADD_USER, (state, {payload}) => ({
  //   ...state,
  //   user2: payload,
  // })],

  [ADD_USER, (state, { payload: { login, password } }) => ({
    ...state,
    [login]: {
      login: login,
      password: password,
    },
  })],
]);

export const users = (state = initialState, action) => {
  if (!usersCollection.has(action.type)) {
    return state;
  }

  return usersCollection.get(action.type)(state, action);
};