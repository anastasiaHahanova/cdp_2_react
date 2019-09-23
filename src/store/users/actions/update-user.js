import {
  addUserAction,
  getUserAction,
} from './update-form-action';

export const addUser = () => (dispatch) => {
  dispatch(addUserAction());
};

export const getUser = () => (dispatch) => {
  dispatch(getUserAction());
};
