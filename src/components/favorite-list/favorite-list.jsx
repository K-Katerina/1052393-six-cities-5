import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import FavoritePlaces from "../favorite-places/favorite-places";
import {groupFavoriteOffersByCity} from "../../store/reducers/app-data/selectors";
import {AppRoute} from "../../const";
import {getFavorites} from "../../store/api-actions";

const FavoriteList = (props) => {
  const {favorites, loadFavorites} = props;

  useEffect(() => {
    loadFavorites();
  }, []);

  return (favorites.size ?
    <React.Fragment>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Array.from(favorites.keys()).map((location) =>
          <li key={location} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link to={AppRoute.ROOT} className="locations__item-link">
                  <span>{location}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              <FavoritePlaces offersForLocation={favorites.get(location)}/>
            </div>
          </li>
        )}
      </ul>
    </React.Fragment>
    : <FavoritesEmpty/>
  );
};

FavoriteList.propTypes = {
  favorites: PropTypes.instanceOf(Map),
  loadFavorites: PropTypes.func
};

const mapStateToProps = (state) => ({
  favorites: groupFavoriteOffersByCity(state)
});


const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => dispatch(getFavorites()),
});

export {FavoriteList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
