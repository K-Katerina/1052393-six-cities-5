import {createSelector} from "reselect";
import {capitalizeWord} from "../../../utils";
import {getSelectedCity, getSortType} from "../app-process/selectors";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const isLoadedOfferById = (state) => {
  return state.DATA.isLoadingOfferById;
};

export const isLoadedReviewsById = (state) => {
  return state.DATA.isLoadingReviewsById;
};

export const getCurrentOffer = (state) => {
  return state.DATA.currentOffer;
};

export const getCurrentReviews = (state) => {
  return state.DATA.currentReviewsForOffer.sort((a, b) => b.date - a.date);
};

export const getCurrentNearPlaces = (state) => {
  return state.DATA.currentNearPlaces;
};

export const getFavorites = (state) => {
  return state.DATA.favorites;
};

export const getOfferByIdFactory = (id) => createSelector(
    [getOffers],
    (offers) => {
      return offers.find((it) => it.id === id);
    });

export const groupFavoriteOffersByCity = createSelector(
    [getFavorites],
    (offers) => {
      const map = new Map();
      offers.forEach((offer) => {
        const city = offer.cityName;
        map.set(city, map.get(city) || []);
        map.get(city).push(offer);
      });
      return map;
    });

export const getOffersForCity = createSelector(
    [getOffers, getSelectedCity],
    (offers, city) => {
      return [...offers.filter((offer) => capitalizeWord(offer.cityName) === capitalizeWord(city))];
    });

export const getSortOffers = createSelector(
    [getOffersForCity, getSortType],
    (offersForSelectedCity, sortType) => {
      switch (sortType) {
        case `PRICE_TO_HIGH`: return [...offersForSelectedCity].sort((a, b) => a.costPerNight - b.costPerNight);
        case `PRICE_TO_LOW`: return [...offersForSelectedCity].sort((a, b) => b.costPerNight - a.costPerNight);
        case `BY_RATING`: return [...offersForSelectedCity].sort((a, b) => b.rating - a.rating);
        default: return [...offersForSelectedCity];
      }
    });
