import { SET_USER } from "./actions";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    default:
        return state  
  }
}
