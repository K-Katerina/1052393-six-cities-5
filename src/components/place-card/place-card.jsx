import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {TypeCards} from "../../const";
import OfferCard from "../offer-card/offer-card";

const PlaceCard = (props) => {
  const {onHover, offer} = props;
  return (
    <React.Fragment>
      <OfferCard onHover={onHover} offer={offer}/>
    </React.Fragment>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: OfferPropType.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards))
};

export default PlaceCard;
