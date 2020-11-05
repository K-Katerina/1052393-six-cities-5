import {mockOffer, mockReview} from "../../../const";
import {extend} from "../../../utils";
import {ActionTypeForData} from "./actions";
import {appData} from "./app-data";

const state = {
  offers: [mockOffer],
  currentOffer: mockOffer,
  isLoadingOfferById: true,
  currentReviewsForOffer: [mockReview],
  currentNearPlaces: [mockOffer],
  favorites: [mockOffer]
};

const newMockOffer = extend(mockOffer, {title: `This is probably not a problem with npm`});

describe(`AppData Reducer testing`, () => {

  it(`Test reducer action LOAD_OFFERS`, () => {
    const action = {
      type: ActionTypeForData.LOAD_OFFERS,
      payload: [mockOffer, newMockOffer]
    };
    expect(appData(state, action).offers).toEqual([mockOffer, newMockOffer]);
  });

  it(`Test reducer action GET_OFFER_BY_ID`, () => {
    const action = {
      type: ActionTypeForData.GET_OFFER_BY_ID,
      payload: newMockOffer
    };
    expect(appData(state, action).currentOffer).toEqual(newMockOffer);
  });

  it(`Test reducer action IS_LOADED_OFFER_BY_ID`, () => {
    const action = {
      type: ActionTypeForData.IS_LOADED_OFFER_BY_ID,
      payload: false
    };
    expect(appData(state, action).isLoadingOfferById).toEqual(false);
  });

  it(`Test reducer action GET_REVIEWS_BY_OFFER_ID`, () => {
    const action = {
      type: ActionTypeForData.GET_REVIEWS_BY_OFFER_ID,
      payload: []
    };
    expect(appData(state, action).currentReviewsForOffer).toEqual([]);
  });

  it(`Test reducer action GET_NEAR_PLACES_BY_OFFER_ID`, () => {
    const action = {
      type: ActionTypeForData.GET_NEAR_PLACES_BY_OFFER_ID,
      payload: [mockOffer, newMockOffer]
    };
    expect(appData(state, action).currentNearPlaces).toEqual([mockOffer, newMockOffer]);
  });

  it(`Test reducer action GET_FAVORITES`, () => {
    const action = {
      type: ActionTypeForData.GET_FAVORITES,
      payload: []
    };
    expect(appData(state, action).favorites).toEqual([]);
  });
});
