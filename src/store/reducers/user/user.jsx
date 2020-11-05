import {extend} from "../../../utils";
import {ActionTypeForUser} from "./actions";

const initialState = {
  login: null,
  loggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeForUser.LOGIN:
      return extend(state, {
        loggedIn: action.payload
      });
    case ActionTypeForUser.CHANGE_LOGIN:
      return extend(state, {
        login: action.payload
      });
  }
  return state;
};

export {user};
