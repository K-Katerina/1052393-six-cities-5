import {extend} from "../utils";
import {ActionType} from "./actions";
import {OFFERS} from "../mocks/offers";
import {Cities} from "../const";

const initialState = {
  selectedCity: Cities.PARIS,
  offers: OFFERS,
  activeOffer: null,
  isLoggedIn: true
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
    default: return state;
  }
};


export {reducer};
