import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {Link} from "react-router-dom";
import {getRating} from "../../utils";
import {getStyleForCard, TypeCards} from "../../const";

const OfferCard = (props) => {
  const {onHover, offer, typeCard = TypeCards.CITIES} = props;
  const needPremiumMark = TypeCards.CITIES === typeCard;
  const {className, width, height} = getStyleForCard(typeCard);
  return (
    <React.Fragment>
      <article className={`${className}__card place-card`}
        onMouseOver={(evt) => {
          evt.preventDefault();
          if (onHover) {
            onHover(offer);
          }
        }}
      >
        {offer.isPremium && needPremiumMark ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ``}
        <div className={`${className}__image-wrapper place-card__image-wrapper`}>
          <Link to={`/offer/${offer.id}`}>
            <img className="place-card__image" src={offer.preview} width={`${width}`} height={`${height}`}
              alt="Place image"/>
          </Link>
        </div>
        <div className={`${className}__card-info place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.costPerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
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

OfferCard.propTypes = {
  onHover: PropTypes.func,
  offer: OfferPropType.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards))
};

export default OfferCard;
