import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {Link, withRouter} from "react-router-dom";
import {AppRoute, HousingType, TypeCards} from "../../const";
import {ActionCreatorForProcess} from "../../store/reducers/app-process/actions";
import {getRating, getStyleForCard} from "../../utils";
import {connect} from "react-redux";
import {isLoggedIn} from "../../store/reducers/user/selectors";
import {updateFavorite} from "../../store/api-actions";

const OfferCard = (props) => {
  const {changeActiveOffer, offer, typeCard = TypeCards.CITIES, loggedIn, history, onButtonClick, isFavorite} = props;
  const needChangeActiveOffer = typeCard === TypeCards.CITIES;
  const needPremiumMark = TypeCards.CITIES === typeCard;
  const {className, width, height} = getStyleForCard(typeCard);
  return (
    <React.Fragment>
      <article className={`${className}__card place-card`}
        onMouseLeave={(evt) => {
          if (needChangeActiveOffer) {
            evt.preventDefault();
            changeActiveOffer(-1);
          }
        }}
        onMouseEnter={(evt) => {
          if (needChangeActiveOffer) {
            evt.preventDefault();
            changeActiveOffer(offer.id);
          }
        }}
      >
        {offer.isPremium && needPremiumMark &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
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
            <button onClick={() => {
              if (!loggedIn) {
                history.push(AppRoute.LOGIN);
              } else {
                onButtonClick(offer.id, Number(!isFavorite));
              }
            }} className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: getRating(offer.rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{HousingType[offer.type.toUpperCase()]}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

OfferCard.propTypes = {
  changeActiveOffer: PropTypes.func,
  onButtonClick: PropTypes.func,
  offer: OfferPropType.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards)),
  loggedIn: PropTypes.bool,
  history: PropTypes.object,
  isFavorite: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
  loggedIn: isLoggedIn(state),
  isFavorite: ownProps.offer.isFavorite
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveOffer: (activeOfferId) => dispatch(ActionCreatorForProcess.changeActiveOffer(activeOfferId)),
  onButtonClick: (id, status) => dispatch(updateFavorite(id, status))
});

export {OfferCard};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfferCard));
