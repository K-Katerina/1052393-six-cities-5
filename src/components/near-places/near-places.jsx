import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import NearPlacesCard from "../near-place-card/near-place-card";
import {getNearOffers, getOffersForCity} from "../../utils";
import {connect} from "react-redux";

const NearPlaces = (props) => {
  const {offers} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) =>
          <NearPlacesCard
            offer={offer}
            key={offer.id}
          />)}
      </div>
    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType)
};

const mapStateToProps = (state) => ({
  offers: getOffersForCity(state.selectedCity, getNearOffers(state.offers))
});

export {NearPlaces};
export default connect(mapStateToProps)(NearPlaces);
