import { combineReducers } from "redux";

import { loginReducer } from "../redux/loginReducer";
import { signUpReducer } from "../redux/signUpReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
});
