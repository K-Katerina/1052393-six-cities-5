import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import PlaceCard from "../place-card/place-card";
import {capitalizeWord, getOffersForCity} from "../../utils";
import {connect} from "react-redux";
import Sort from "../sort/sort";

class OffersList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortType: `POPULAR`
    };
  }

  onSortTypeChanged(sortType) {
    this.setState({
      sortType
    });
  }

  sortOffers(offers, sortType) {
    switch (sortType) {
      case `POPULAR`: return [...offers];
      case `PRICE_TO_HIGH`: return offers.sort((a, b) => a.costPerNight - b.costPerNight);
      case `PRICE_TO_LOW`: return offers.sort((a, b) => b.costPerNight - a.costPerNight);
      case `BY_RATING`: return offers.sort((a, b) => b.rating - a.rating);
      default: throw new Error();
    }
  }

  render() {
    const {offers, selectedCity} = this.props;
    const {sortType} = this.state;
    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} place{offers.length > 1 ? `s` : ``} to stay
          in {capitalizeWord(selectedCity.name)}</b>
        <Sort sortType={sortType} onSortTypeChanged={(newSortType) => this.onSortTypeChanged(newSortType)}/>
        <div className="cities__places-list places__list tabs__content">
          {this.sortOffers(offers, sortType).map((offer) =>
            <PlaceCard
              key={offer.id}
              offer={offer}
            />)}
        </div>
      </section>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  selectedCity: CityPropType
};

const mapStateToProps = (state) => ({
  offers: getOffersForCity(state.selectedCity, state.offers),
  selectedCity: state.selectedCity
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
