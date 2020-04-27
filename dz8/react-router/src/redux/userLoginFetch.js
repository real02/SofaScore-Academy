import { requestOptions } from "./requestOptions";

export const userLoginFetch = (user) => {
  return (dispatch) => {
    return fetch(
      "https://private-leagues-api.herokuapp.com/api/login",
      requestOptions(user)
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          // handle errors
        } else {
          localStorage.setItem("token", data.token);
          dispatch(loginUser(data.user));
          console.log(localStorage.token);
        }
      });
  };
};

const loginUser = (userObj) => ({
  type: "LOGIN_USER",
  payload: userObj,
});
