import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const initialState = {
  login: null,
  loggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return extend(state, {
        loggedIn: action.payload
      });
    case ActionType.CHANGE_LOGIN:
      return extend(state, {
        login: action.payload
      });
  }
  return state;
};

export {user};
