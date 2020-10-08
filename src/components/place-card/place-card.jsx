import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";

const PlaceCard = (props) => {
  const {onHover, offer} = props;
  return (
    <React.Fragment>
      <article className="cities__place-card place-card"
        onMouseOver={(evt) => {
          evt.preventDefault();
          onHover(offer);
        }}
      >
        {offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.preview} width="260" height="200"
              alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.costPerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            {/* TODO Button onClick*/}
            <button className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: Math.round(offer.rating / 5 * 100) + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: OfferPropType.isRequired
};

export default PlaceCard;
