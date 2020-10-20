import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {groupOffersByLocation} from "../../utils";
import FavoriteCard from "../favorite-card/favorite-card";
import {connect} from "react-redux";

const FavoriteList = (props) => {
  const {offers} = props;
  const groupedFavoritesOffers = groupOffersByLocation(offers);
  return (
    <ul className="favorites__list">
      {Array.from(groupedFavoritesOffers.keys()).map((location) =>
        <li key={location} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link to="/" className="locations__item-link">
                <span>{location}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {groupedFavoritesOffers.get(location).map((offer) =>
              <FavoriteCard key={offer.id} offer={offer}/>
            )}
          </div>
        </li>
      )}
    </ul>
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType)
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {FavoriteList};
export default connect(mapStateToProps)(FavoriteList);
