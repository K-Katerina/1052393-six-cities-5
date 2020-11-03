import {extend} from "../../../utils";
import {ActionTypeForData} from "./actions";

const initialState = {
  offers: [],
  currentOffer: null,
  isLoadingOfferById: true,
  currentReviewsForOffer: [],
  currentNearPlaces: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeForData.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionTypeForData.GET_OFFER_BY_ID:
      return extend(state, {
        currentOffer: action.payload,
      });
    case ActionTypeForData.IS_LOADED_OFFER_BY_ID:
      return extend(state, {
        isLoadingOfferById: action.payload,
      });
    case ActionTypeForData.GET_REVIEWS_BY_OFFER_ID:
      return extend(state, {
        currentReviewsForOffer: action.payload,
      });
    case ActionTypeForData.GET_NEAR_PLACES_BY_OFFER_ID:
      return extend(state, {
        currentNearPlaces: action.payload,
      });
    default: return state;
  }
};

export {appData};
