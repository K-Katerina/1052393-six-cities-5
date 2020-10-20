import React from "react";
import {OfferPropType} from "../../types";
import OfferCard from "../offer-card/offer-card";

const PlaceCard = (props) => {
  const {offer} = props;
  return (
    <OfferCard offer={offer}/>
  );
};

PlaceCard.propTypes = {
  offer: OfferPropType.isRequired,
};

export default PlaceCard;
