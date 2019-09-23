import {
  ADD_USER,
  GET_USER,
} from '../actions';

const initialState = {
  user1: {
    login: 'hahanova',
    password: 'qwerty',
  }
};

const usersCollection = new Map([
  [ADD_USER, (state) => ({
    ...state,
    sequenceFieldsAmount: initialState.sequenceFieldsAmount,
  })],
  [GET_USER, (state) => ({
    ...state,
    sequenceFieldsAmount: initialState.sequenceFieldsAmount,
  })],
]);

export const users = (state = initialState, action) => {
  if (!usersCollection.has(action.type)) {
    return state;
  }

  return usersCollection.get(action.type)(state, action);
};