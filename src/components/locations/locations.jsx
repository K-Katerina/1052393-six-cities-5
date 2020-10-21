import React from "react";
import {Cities} from "../../const";
import {ActionCreator} from "../../store/actions";
import PropTypes from "prop-types";
import {CityPropType} from "../../types";
import {capitalizeWord} from "../../utils";
import {connect} from "react-redux";

const Locations = (props) => {
  const {selectedCity, changeSelectedCity} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(Cities).map((city) =>
          <li key={city} className="locations__item">
            <a onClick={() => changeSelectedCity(Cities[city])}
              className={`locations__item-link tabs__item ${selectedCity === Cities[city] ? `tabs__item--active` : ``}`}
              href="#" data-city={`${city}`}>
              <span>{capitalizeWord(city)}</span>
            </a>
          </li>)}
      </ul>
    </section>
  );
};

Locations.propTypes = {
  selectedCity: CityPropType,
  changeSelectedCity: PropTypes.func,
  cities: PropTypes.arrayOf(String)
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  cities: [...new Set(state.offers.map((offer) => offer.location))]
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedCity(selectedCity) {
    dispatch(ActionCreator.changeSelectedCity(selectedCity));
    dispatch(ActionCreator.changeActiveOffer(null));
  }
});

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);

