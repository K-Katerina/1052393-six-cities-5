import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {groupOffersByLocation} from "../../../utils";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import {Link} from "react-router-dom";
import FavoriteCard from "../../favorite-card/favorite-card";

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
                        <FavoriteCard key={offer.id} offer={offer}/>
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
  offers: PropTypes.arrayOf(OfferPropType)
};

export default FavoritesPage;
