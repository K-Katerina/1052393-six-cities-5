import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import OfferCard from "../offer-card/offer-card";

const PlaceCard = (props) => {
  const {onHover, offer} = props;
  return (
    <OfferCard onHover={onHover} offer={offer}/>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: OfferPropType.isRequired,
};

export default PlaceCard;
