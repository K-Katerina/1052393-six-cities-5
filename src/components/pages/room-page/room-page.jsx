import React from "react";
import {OfferPropType} from "../../../types";
import Header from "../../header/header";
import PropTypes from "prop-types";
import {getRating} from "../../../utils";
import NearPlaces from "../../near-places/near-places";
import Reviews from "../../reviews/reviews";
import Owner from "../../owner/owner";

const MAX_NEAR_PLACES = 3;

class RoomPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
  }

  setActiveOffer(offer) {
    this.setState({
      activeOffer: offer,
    });
  }

  render() {
    const {offer, offers} = this.props;
    return (
      <React.Fragment>
        <div className="page">
          <Header/>
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offer.photos.map((photo) =>
                    <div key={offer.id + photo} className="property__image-wrapper">
                      <img className="property__image" src={photo} alt="Photo studio"/>
                    </div>
                  )}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {offer.isPremium ?
                    <div className="property__mark">
                      <span>Premium</span>
                    </div> : ``}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {offer.title}
                    </h1>
                    <button
                      className={`property__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`}
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
                      {offer.bedroomsCount} Bedroom{offer.bedroomsCount > 1 ? `s` : ``}
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {offer.maxGuests} adult{offer.maxGuests > 1 ? `s` : ``}
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
                  <Reviews reviews={offer.reviews}/>
                </div>
              </div>
              <section className="property__map map"></section>
            </section>
            <div className="container">
              <NearPlaces
                offers={offers.slice(0, MAX_NEAR_PLACES)}
                onSelectActiveCard={(selectOffer) => this.setActiveOffer(selectOffer)}
              />
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

RoomPage.propTypes = {
  offer: OfferPropType.isRequired,
  offers: PropTypes.arrayOf(OfferPropType)
};

export default RoomPage;
