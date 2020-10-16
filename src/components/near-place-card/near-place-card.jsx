import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {TypeCards} from "../../const";
import OfferCard from "../offer-card/offer-card";

const NearPlacesCard = (props) => {
  const {onHover, offer} = props;
  return (
    <OfferCard onHover={onHover} offer={offer} typeCard={TypeCards.NEAR_PLACES}/>
  );
};

NearPlacesCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: OfferPropType.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards))
};

export default NearPlacesCard;
