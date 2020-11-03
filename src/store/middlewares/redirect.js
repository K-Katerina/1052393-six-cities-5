import {ActionTypeForUser} from "../reducers/user/actions";
import browserHistory from "../../browser-history";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionTypeForUser.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  return next(action);
};
