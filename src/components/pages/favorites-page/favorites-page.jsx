import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {getRating, groupOffersByLocation} from "../../../utils";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import {Link} from "react-router-dom";

const FavoritesPage = (props) => {
  const {offers} = props;
  const groupedOffers = groupOffersByLocation(offers);
  return (
    <React.Fragment>
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Array.from(groupedOffers.keys()).map((location) =>
                  <li key={location} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link to="/" className="locations__item-link">
                          <span>{location}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {groupedOffers.get(location).map((offer) =>
                        <article key={offer.id} className="favorites__card place-card">
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
                      )}
                    </div>
                  </li>
                )}
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
};

export default FavoritesPage;
