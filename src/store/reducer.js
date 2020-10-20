import {extend} from "../utils";
import {ActionType} from "./actions";
import {Cities} from "../const";
import {OFFERS} from "../mocks/offers";

const initialState = {
  selectedCity: Cities.PARIS,
  activeOffer: Cities.PARIS,
  offers: OFFERS
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
    case ActionType.CHANGE_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    default: return state;
  }
};


export {reducer};
