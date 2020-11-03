import React from "react";
import {OfferPropType} from "../../types";
import {getRating} from "../../utils";
import Owner from "../owner/owner";
import Reviews from "../reviews/reviews";

const InfoProperty = (props) => {
  const {offer} = props;
  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {offer.isPremium &&
          <div className="property__mark">
            <span>Premium</span>
          </div>}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {offer.title}
          </h1>
          <button
            className={`property__bookmark-button button ${offer.isFavorite && `place-card__bookmark-button--active`}`}
            type="button">
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: getRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            {offer.type}
          </li>
          <li className="property__feature property__feature--bedrooms">
            {offer.bedroomsCount} Bedroom{offer.bedroomsCount > 1 && `s`}
          </li>
          <li className="property__feature property__feature--adults">
            Max {offer.maxGuests} adult{offer.maxGuests > 1 && `s`}
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">&euro;{offer.costPerNight}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {offer.features.map((feature) =>
              <li key={offer.id + feature} className="property__inside-item">
                {feature}
              </li>
            )}
          </ul>
        </div>
        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <Owner owner = {offer.owner}/>
          <div className="property__description">
            <p className="property__text">
              {offer.desc}
            </p>
          </div>
        </div>
        <Reviews id={offer.id}/>
      </div>
    </div>
  );
};

InfoProperty.propTypes = {
  offer: OfferPropType.isRequired,
};

export default InfoProperty;
