import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import React from "react";
import FavoriteCard from "../favorite-card/favorite-card";

const FavoritePlaces = (props) => {
  const {offersForLocation} = props;
  return (
    <React.Fragment>
      {offersForLocation.map((offer) =>
        <FavoriteCard key={offer.id} offer={offer}/>
      )}
    </React.Fragment>
  );
};

FavoritePlaces.propTypes = {
  offersForLocation: PropTypes.arrayOf(OfferPropType)
};

export default FavoritePlaces;
