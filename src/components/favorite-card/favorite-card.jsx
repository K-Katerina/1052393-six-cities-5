import React from "react";
import {OfferPropType} from "../../types";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {TypeCards} from "../../const";

const FavoriteCard = (props) => {
  const {offer, onHover} = props;
  return (
    <React.Fragment>
      <OfferCard onHover={onHover} offer={offer} typeCard={TypeCards.FAVORITES}/>
    </React.Fragment>
  );
};

FavoriteCard.propTypes = {
  offer: OfferPropType,
  onHover: PropTypes.func.isRequired,
};

export default FavoriteCard;
