import { requestOptions } from "./api/requestOptions";

export function checkTokenPersistance(token) {
  fetch(
    "https://private-leagues-api.herokuapp.com/api/check-token",
    requestOptions(token)
  )
    .then((resp) => resp.json())
    .then((data) => {
      if (data.errors) {
        return false
      } else {
        return true
      }
    });
}
