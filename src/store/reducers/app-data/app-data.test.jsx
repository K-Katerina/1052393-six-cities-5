import {mockOffer, mockReview} from "../../../const";
import {extend} from "../../../utils";
import {ActionTypeForData} from "./actions";
import {appData} from "./app-data";

const newMockOffer = extend(mockOffer, {id: 9876, title: `This is probably not a problem with npm`, isFavorite: !mockOffer.isFavorite});

const state = {
  offers: [mockOffer],
  currentOffer: mockOffer,
  isLoadingOfferById: true,
  currentReviewsForOffer: [mockReview],
  currentNearPlaces: [newMockOffer],
  favorites: [mockOffer],
  isLoadingReviewsById: true
};

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

  it(`Test reducer action IS_LOADED_OFFER_BY_ID`, () => {
    const action = {
      type: ActionTypeForData.IS_LOADED_REVIEWS_BY_ID,
      payload: false
    };
    expect(appData(state, action).isLoadingReviewsById).toEqual(false);
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

  it(`Test reducer action UPDATE_FAVORITE`, () => {
    const updateIsFavoriteForMockOffer = extend(mockOffer, {isFavorite: !mockOffer.isFavorite});
    const action = {
      type: ActionTypeForData.UPDATE_FAVORITE,
      payload: updateIsFavoriteForMockOffer
    };
    const data = appData(state, action);
    expect(data.offers).toEqual([updateIsFavoriteForMockOffer]);
    expect(data.favorites).toEqual([]);
    expect(data.currentOffer).toEqual(updateIsFavoriteForMockOffer);
    expect(data.currentNearPlaces).toEqual([newMockOffer]);
  });
});
