import React from "react";
import {OfferPropType} from "../../types";
import {TypeCards} from "../../const";
import OfferCard from "../offer-card/offer-card";

const NearPlacesCard = (props) => {
  const {offer} = props;
  return (
    <OfferCard offer={offer} typeCard={TypeCards.NEAR_PLACES}/>
  );
};

NearPlacesCard.propTypes = {
  offer: OfferPropType.isRequired,
};

export default NearPlacesCard;
