import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import PlaceCard from "../place-card/place-card";
import {capitalizeWord, getOffersForCity} from "../../utils";
import {Sort} from "../sort/sort";
import {connect} from "react-redux";

const OffersList = (props) => {
  const {offers, selectedCity} = props;
  const offersForCity = getOffersForCity(selectedCity, offers);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersForCity.length} place{offersForCity.length > 1 ? `s` : ``} to stay in {capitalizeWord(selectedCity.name)}</b>
      <Sort/>
      <div className="cities__places-list places__list tabs__content">
        {offersForCity.map((offer) =>
          <PlaceCard
            key={offer.id}
            offer={offer}
          />)}
      </div>
    </section>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  selectedCity: CityPropType
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  selectedCity: state.selectedCity
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
