import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import NearPlacesCard from "../near-place-card/near-place-card";
import {getNearOffers, getOffersForCity} from "../../utils";
import {connect} from "react-redux";

const NearPlaces = (props) => {
  const {selectedCity, offers} = props;
  const nearOffers = getOffersForCity(selectedCity, getNearOffers(offers));

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((offer) =>
          <NearPlacesCard
            offer={offer}
            key={offer.id}
          />)}
      </div>
    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  selectedCity: CityPropType
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  selectedCity: state.selectedCity
});

export {NearPlaces};
export default connect(mapStateToProps)(NearPlaces);
