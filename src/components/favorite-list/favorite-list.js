import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {groupOffersByLocation} from "../../utils";
import FavoriteCard from "../favorite-card/favorite-card";

const FavoriteList = (props) => {
  const {offers} = props;
  const groupedOffers = groupOffersByLocation(offers);
  return (
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
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType)
};

export default FavoriteList;
