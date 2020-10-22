import {extend} from "../utils";
import {ActionType} from "./actions";
import {OFFERS} from "../mocks/offers";
import {Cities, DEFAULT_SORT_TYPE} from "../const";

const initialState = {
  selectedCity: Cities.PARIS,
  offers: OFFERS,
  activeOffer: null,
  isLoggedIn: true,
  sortType: DEFAULT_SORT_TYPE,
  isOpenSortMenu: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SELECTED_CITY:
      return extend(state, {
        selectedCity: action.payload
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload
      });
    case ActionType.OPEN_SORT_MENU:
      return extend(state, {
        isOpenSortMenu: action.payload
      });
    default: return state;
  }
};


export {reducer};
