import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {groupOffersByCity} from "../../utils";
import {connect} from "react-redux";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import FavoritePlaces from "../favorite-places/favorite-places";

const FavoriteList = (props) => {
  const {offers} = props;
  return (offers.size ?
    <React.Fragment>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Array.from(offers.keys()).map((location) =>
          <li key={location} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link to="/" className="locations__item-link">
                  <span>{location}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              <FavoritePlaces offersForLocation={offers.get(location)}/>
            </div>
          </li>
        )}
      </ul>
    </React.Fragment>
    : <FavoritesEmpty/>
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.instanceOf(Map)
};

const mapStateToProps = (state) => ({
  offers: groupOffersByCity(state.offers)
});

export {FavoriteList};
export default connect(mapStateToProps)(FavoriteList);
