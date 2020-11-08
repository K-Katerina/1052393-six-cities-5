import moment from "moment";
import {Cities, DEFAULT_SORT_TYPE, mockOffer, mockReview, TypeCards} from "./const";
import {NameSpace} from "./store/reducers/root-reducer";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getRating = (rating) => Math.round(rating / 5 * 100) + `%`;

export const getDate = (date) => moment(date).format(`MMMM YYYY`);

export const addElementInArray = (el, array) => {
  const index = array.findIndex((it) => it.id === el.id);
  return [
    ...array.slice(0, index),
    el,
    ...array.slice(index + 1)
  ];
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

export const makeInitialStateMock = () => ({
  [NameSpace.DATA]: {
    offers: [mockOffer],
    currentOffer: mockOffer,
    isLoadingOfferById: true,
    isLoadingReviewsById: true,
    currentReviewsForOffer: [mockReview],
    currentNearPlaces: [mockOffer],
    favorites: [mockOffer]
  },
  [NameSpace.PROCESS]: {
    selectedCity: Cities.AMSTERDAM,
    activeOfferId: mockOffer.id,
    sortType: DEFAULT_SORT_TYPE,
    isOpenSortMenu: false,
  },
  [NameSpace.USER]: {
    login: `null@mail.ru`,
    loggedIn: true
  }
});

export const offerAdaptToClient = (offer) => {
  const adaptedOffer = extend(
      offer,
      {
        cityName: offer.city.name,
        coordinatesCity: {
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
          zoom: offer.city.location.zoom
        },
        coordinates: {
          lat: offer.location.latitude,
          lng: offer.location.longitude,
          zoom: offer.location.zoom
        },
        preview: offer.preview_image,
        photos: offer.images,
        desc: offer.description,
        isPremium: offer.is_premium,
        bedroomsCount: offer.bedrooms,
        maxGuests: offer.max_adults,
        costPerNight: offer.price,
        features: offer.goods,
        isFavorite: offer.is_favorite,
        owner:
          {
            id: offer.host.id,
            avatar: offer.host.avatar_url,
            name: offer.host.name,
            isSuper: offer.host.is_pro
          },
        reviews: []
      });

  delete adaptedOffer.bedrooms;
  delete adaptedOffer.city;
  delete adaptedOffer.description;
  delete adaptedOffer.goods;
  delete adaptedOffer.host;
  delete adaptedOffer.images;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.location;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.price;

  return adaptedOffer;
};

export const reviewAdaptToClient = (review) => {
  const adaptedReview = extend(
      review,
      {
        date: new Date(review.date),
        author: {
          id: review.user.id,
          name: review.user.name,
          avatar: review.user.avatar_url,
          isPro: review.user.is_pro
        }
      });

  delete adaptedReview.user;

  return adaptedReview;
};
