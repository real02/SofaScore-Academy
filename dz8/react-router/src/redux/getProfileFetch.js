import { loginUser } from "./actions";

export function getProfileFetch() {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch("https://private-leagues-api.herokuapp.com/api/users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
            // An error will occur if the token is invalid.
            localStorage.removeItem("token");
          } else {
            dispatch(loginUser(data.user));
          }
        });
    }
  };
}
