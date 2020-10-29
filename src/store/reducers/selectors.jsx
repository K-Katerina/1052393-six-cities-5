import {createSelector} from "reselect";
import {capitalizeWord} from "../../utils";
import {MAX_NEAR_PLACES} from "../../const";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getSelectedCity = (state) => {
  return state.PROCESS.selectedCity;
};

export const getActiveOffer = (state) => {
  return state.PROCESS.activeOffer;
};

export const getOffersById = (id, state) => {
  return getOffers(state).find((it) => it.id === id);
};

export const getSortType = (state) => {
  return state.PROCESS.sortType;
};

export const isLoggedIn = (state) => {
  return state.PROCESS.isLoggedIn;
};

export const isOpenSortMenu = (state) => {
  return state.PROCESS.isOpenSortMenu;
};

export const groupOffersByCity = (state) => {
  const map = new Map();
  getOffers(state).filter((offer) => offer.isFavorite).forEach((offer) => {
    const city = offer.city;
    map.set(city, map.get(city) || []);
    map.get(city).push(offer);
  });
  return map;
};

export const getOffersForCity = createSelector(
    [getOffers, getSelectedCity],
    (offers, city) => {
      return offers.filter((offer) => capitalizeWord(offer.cityName) === capitalizeWord(city));
    });


export const getNearPlacesFactory = (id, state) => createSelector(
    [getOffersForCity],
    (offers) => {
      const places = offers.filter((it) => it.id !== id).slice(0, MAX_NEAR_PLACES);
      places.push(getOffersById(id, state));
      return places;
    });

