import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const initialState = {
  offers: [],
  isLoadingOffers: true
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.IS_LOADED_OFFERS:
      return extend(state, {
        isLoadingOffers: action.payload,
      });
    default: return state;
  }
};

export {appData};
