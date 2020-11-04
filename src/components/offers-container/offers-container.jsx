import React from "react";
import PropTypes from "prop-types";
import {CityPropType} from "../../types";
import {capitalizeWord} from "../../utils";
import {connect} from "react-redux";
import Sort from "../sort/sort";
import OffersList from "../offers-list/offers-list";
import {getOffersForCity} from "../../store/reducers/app-data/selectors";
import {getSelectedCity} from "../../store/reducers/app-process/selectors";

const OffersContainer = (props) => {
  const {offersCount, selectedCity} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} place{offersCount > 1 && `s`} to stay
          in {capitalizeWord(selectedCity)}</b>
      <Sort/>
      <OffersList/>
    </section>
  );
};

OffersContainer.propTypes = {
  offersCount: PropTypes.number,
  selectedCity: CityPropType,
};

const mapStateToProps = (state) => ({
  offersCount: getOffersForCity(state).length,
  selectedCity: getSelectedCity(state)
});

export {OffersContainer};
export default connect(mapStateToProps)(OffersContainer);
