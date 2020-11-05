import {extend} from "../../../utils";
import {ActionTypeForProcess} from "./actions";
import {Cities, DEFAULT_SORT_TYPE} from "../../../const";

const initialState = {
  selectedCity: Object.keys(Cities)[0],
  activeOfferId: -1,
  sortType: DEFAULT_SORT_TYPE,
  isOpenSortMenu: false,
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeForProcess.CHANGE_SELECTED_CITY:
      return extend(state, {
        selectedCity: action.payload
      });
    case ActionTypeForProcess.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOfferId: action.payload
      });
    case ActionTypeForProcess.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload
      });
    case ActionTypeForProcess.OPEN_SORT_MENU:
      return extend(state, {
        isOpenSortMenu: action.payload
      });
    default: return state;
  }
};

export {appProcess};
