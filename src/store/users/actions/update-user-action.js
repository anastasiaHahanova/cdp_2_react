export const ADD_USER = 'ADD_USER';

// export const addUserAction = (payload) => ({
//   type: ADD_USER,
//   payload,
// });

export const addUserAction = (payload) => {
  console.log(22, payload);
  return {
    type: ADD_USER,
    payload,
}};
