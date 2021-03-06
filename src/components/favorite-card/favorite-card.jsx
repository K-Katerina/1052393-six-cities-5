import React from "react";
import {OfferPropType} from "../../types";
import {TypeCards} from "../../const";
import OfferCard from "../offer-card/offer-card";

const FavoriteCard = (props) => {
  const {offer} = props;
  return (
    <OfferCard offer={offer} typeCard={TypeCards.FAVORITES}/>
  );
};

FavoriteCard.propTypes = {
  offer: OfferPropType.isRequired,
};

export default FavoriteCard;
