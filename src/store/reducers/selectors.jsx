import {createSelector} from "reselect";
import {capitalizeWord} from "../../utils";
import {MAX_NEAR_PLACES} from "../../const";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getSelectedCity = (state) => {
  return state.PROCESS.selectedCity;
};

export const getActiveOfferId = (state) => {
  return state.PROCESS.activeOfferId;
};

export const getSortType = (state) => {
  return state.PROCESS.sortType;
};

export const isLoaded = (state) => {
  return state.DATA.isLoadingOffers;
};

export const getUserLogin = (state) => {
  return state.USER.login;
};

export const isLoggedIn = (state) => {
  return state.USER.loggedIn;
};

export const isOpenSortMenu = (state) => {
  return state.PROCESS.isOpenSortMenu;
};

export const getOffersByIdFactory = (id) => createSelector(
    [getOffers],
    (offers) => {
      return offers.find((it) => it.id === id);
    });

export const groupFavoriteOffersByCity = createSelector(
    [getOffers],
    (offers) => {
      const map = new Map();
      offers.filter((offer) => offer.isFavorite).forEach((offer) => {
        const city = offer.city;
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

export const getNearPlacesFactory = (id) => createSelector(
    [getOffersForCity],
    (offers) => {
      return offers.filter((it) => it.id !== id).slice(0, MAX_NEAR_PLACES);
    });

