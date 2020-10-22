import moment from "moment";
import {MAX_NEAR_PLACES, TypeCards} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getNearOffers = (offers) => {
  return offers.slice(0, MAX_NEAR_PLACES);
};

export const getOffersForCity = (city, offers) => {
  return offers.filter((offer) => offer.location === city.name);
};

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case `PRICE_TO_HIGH`: return offers.sort((a, b) => a.costPerNight - b.costPerNight).slice();
    case `PRICE_TO_LOW`: return offers.sort((a, b) => b.costPerNight - a.costPerNight).slice();
    case `BY_RATING`: return offers.sort((a, b) => b.rating - a.rating).slice();
    default: return offers.slice();
  }
};

export const getRating = (rating) => Math.round(rating / 5 * 100) + `%`;

export const getDate = (date) => moment(date).format(`MMMM YYYY`);

export const groupOffersByLocation = (offers) => {
  const map = new Map();
  offers.filter((offer) => offer.isFavorite).forEach((offer) => {
    const location = offer.location;
    map.set(location, map.get(location) || []);
    map.get(location).push(offer);
  });
  return map;
};


export const getStyleForCard = (cardType) => {
  switch (cardType) {
    case TypeCards.CITIES:
      return {
        className: `cities`,
        width: 260,
        height: 200
      };
    case TypeCards.NEAR_PLACES:
      return {
        className: `near-places`,
        width: 260,
        height: 200
      };
    case TypeCards.FAVORITES:
      return {
        className: `favorites`,
        width: 150,
        height: 110
      };
    default:
      return new Error(`Type "${cardType}" not found`);
  }
};

export const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
