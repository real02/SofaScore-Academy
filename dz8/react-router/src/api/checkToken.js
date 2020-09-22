import { requestOptions } from "./requestOptions";
import { checkStatus } from "./checkResponseStatus";

export async function checkToken(token) {
  try {
    const response = await fetch(
      "https://private-leagues-api.herokuapp.com/api/check-token",
      requestOptions(token)
    );

    checkStatus(response);
  } catch (e) {
    return { error: "Fetch failed" };
  }
}
