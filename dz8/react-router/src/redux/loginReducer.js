import * as actions from "./actionTypes";

export function loginReducer(state = [], action) {
  switch (action.type) {
    case actions.SET_USERNAME:
      return { ...state, username: action.username };

    case actions.SET_PASSWORD:
      return { ...state, password: action.password };

    case actions.FETCH_SUCCESSFUL:
      return { ...state, isLoading: false, error: null, user: action.user };

    case actions.FETCH_FAILED:
      return { ...state, isLoading: false, error: action.error, user: null };

    case actions.VALIDATION_FAILED:
      return { ...state, error: Error("Invalid credentials") };

    default:
      return { ...state, error: Error("Unexpected action") };
  }
}
