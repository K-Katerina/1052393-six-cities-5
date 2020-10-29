import PropTypes from "prop-types";
import {HousingType} from "./const";

export const OwnerPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isSuper: PropTypes.bool
});

export const AuthorPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
});

export const ReviewPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: AuthorPropType,
  rating: PropTypes.number.isRequired,
  date: PropTypes.objectOf(Date).isRequired,
  comment: PropTypes.string.isRequired
});

export const CoordinatesPropType = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
});

export const CityPropType = PropTypes.string;

export const OfferPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  cityName: CityPropType,
  coordinatesCity: CoordinatesPropType,
  title: PropTypes.string.isRequired,
  coordinates: CoordinatesPropType.isRequired,
  preview: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string),
  desc: PropTypes.string,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number,
  type: PropTypes.oneOf(Object.keys(HousingType).map((typeOffer) => typeOffer.toLowerCase())).isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
  costPerNight: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(ReviewPropType),
  owner: OwnerPropType.isRequired
});
