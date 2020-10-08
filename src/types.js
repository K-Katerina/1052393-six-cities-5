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

export const OfferPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string),
  desc: PropTypes.string,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number,
  type: PropTypes.oneOf(Object.values(HousingType)).isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
  costPerNight: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(ReviewPropType),
  owner: OwnerPropType.isRequired
});
