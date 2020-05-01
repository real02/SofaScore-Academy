import * as actions from "./actionTypes";

export const setLoggedInStatus = (status) => ({
  type: actions.SET_STATUS,
  status,
});
export const setUsername = (username) => ({
  type: actions.SET_USERNAME,
  username,
});
export const setPassword = (password) => ({
  type: actions.SET_PASSWORD,
  password,
});
export const setToken = (token) => ({
  type: actions.SET_TOKEN,
  token,
});
export const loginUser = user => ({
  type: actions.LOGIN_USER,
  payload: {
    username: user.username,
    password: user.password,
  },
});