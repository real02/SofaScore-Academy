import { combineReducers } from "redux";
import reducer from "../redux/reducer"

export const rootReducer = combineReducers({
  user: reducer,
});
