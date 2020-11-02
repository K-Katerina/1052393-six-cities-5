import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const initialState = {
  offers: [],
  isLoadingOffers: true,
  currentOffer: null,
  isLoadingOfferById: true,
  currentReviewsForOffer: [],
  currentNearPlaces: []
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
    case ActionType.GET_OFFER_BY_ID:
      return extend(state, {
        currentOffer: action.payload,
      });
    case ActionType.IS_LOADED_OFFER_BY_ID:
      return extend(state, {
        isLoadingOfferById: action.payload,
      });
    case ActionType.GET_REVIEWS_BY_OFFER_ID:
      return extend(state, {
        currentReviewsForOffer: action.payload,
      });
    case ActionType.GET_NEAR_PLACES_BY_OFFER_ID:
      return extend(state, {
        currentNearPlaces: action.payload,
      });
    default: return state;
  }
};

export {appData};
