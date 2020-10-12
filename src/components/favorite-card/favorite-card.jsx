import {Link} from "react-router-dom";
import {getRating} from "../../utils";
import React from "react";
import {OfferPropType} from "../../types";

const FavoriteCard = (props) => {
  const {offer} = props;
  return (
    <React.Fragment>
      <article className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${offer.id}`}>
            <img className="place-card__image" src={offer.preview} width="150" height="110"
              alt="Place image"/>
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.costPerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`${offer.isFavorite ? `place-card__bookmark-button--active` : ``} place-card__bookmark-button place-card__bookmark-button--active button`}
              type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: getRating(offer.rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

FavoriteCard.propTypes = {
  offer: OfferPropType
};

export default FavoriteCard;
