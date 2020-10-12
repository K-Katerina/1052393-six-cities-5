import moment from "moment";

export const getRating = (rating) => Math.round(rating / 5 * 100) + `%`;

export const getDate = (date) => moment(date).format(`MMMM YYYY`);

export const groupOffersByLocation = (offers) => {
  const map = new Map();
  offers.forEach((offer) => {
    const location = offer.location;
    map.set(location, map.get(location) || []);
    map.get(location).push(offer);
  });
  return map;
};
