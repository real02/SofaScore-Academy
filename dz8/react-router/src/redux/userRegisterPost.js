//import cookie from "react-cookies";
import { requestOptions } from "./requestOptions";

export const userRegisterPost = (user) => {
  return (dispatch) => {
    return fetch(
      "https://private-leagues-api.herokuapp.com/api/register",
      requestOptions(user)
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          // here handle errors validation etc.
        } else {
          //TO-DO: umjesto local storage spremati cookie
          localStorage.setItem("token", data.token);
          dispatch(signUpUser(data.user));
          console.log(localStorage.token);
        }
      });
  };
};

const signUpUser = (userObj) => ({
  type: "SIGN_UP",
  payload: userObj,
});
