import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import PlaceCard from "../place-card/place-card";
import {capitalizeWord, getOffersForCity, sortOffers} from "../../utils";
import {connect} from "react-redux";
import Sort from "../sort/sort";

const OffersList = (props) => {
  const {offers, selectedCity, sortType} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} place{offers.length > 1 ? `s` : ``} to stay
          in {capitalizeWord(selectedCity.name)}</b>
      <Sort sortType={sortType}/>
      <div className="cities__places-list places__list tabs__content">
        {sortOffers(offers, sortType).map((offer) =>
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
  selectedCity: CityPropType,
  sortType: PropTypes.string
};

const mapStateToProps = (state) => ({
  offers: getOffersForCity(state.selectedCity, state.offers),
  selectedCity: state.selectedCity,
  sortType: state.sortType
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
