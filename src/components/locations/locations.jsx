import React from "react";
import {ActionCreator} from "../../store/actions";
import PropTypes from "prop-types";
import {CityPropType} from "../../types";
import {Cities, DEFAULT_SORT_TYPE} from "../../const";
import {capitalizeWord} from "../../utils";
import {connect} from "react-redux";

const Locations = (props) => {
  const {selectedCity, changeSelectedCity, cities} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) =>
          <li key={city} className="locations__item">
            <a onClick={() => changeSelectedCity(city)}
              className={`locations__item-link tabs__item ${selectedCity.name === city ? `tabs__item--active` : ``}`}
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
    dispatch(ActionCreator.changeSelectedCity(Cities[selectedCity]));
    dispatch(ActionCreator.changeActiveOffer(null));
    dispatch(ActionCreator.changeSortType(DEFAULT_SORT_TYPE));
    dispatch(ActionCreator.openSortMenu(false));
  }
});

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);

