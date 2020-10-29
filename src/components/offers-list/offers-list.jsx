import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import PlaceCard from "../place-card/place-card";
import {sortOffers} from "../../utils";
import {connect} from "react-redux";
import {getOffersForCity, getSortType} from "../../store/reducers/selectors";

const OffersList = (props) => {
  const {offers, sortType} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, sortType).map((offer) =>
        <PlaceCard
          key={offer.id}
          offer={offer}
        />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  sortType: PropTypes.string
};

const mapStateToProps = (state) => ({
  offers: getOffersForCity(state),
  sortType: getSortType(state)
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
