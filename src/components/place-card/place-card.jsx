import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {TypeCards} from "../../const";
import Card from "../card/card";

const PlaceCard = (props) => {
  const {onHover, offer} = props;
  return (
    <React.Fragment>
      <Card onHover={onHover} offer={offer}/>
    </React.Fragment>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: OfferPropType.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards))
};

export default PlaceCard;
