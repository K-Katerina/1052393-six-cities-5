import React from "react";
import {ActionCreatorForProcess} from "../../store/reducers/app-process/actions";
import PropTypes from "prop-types";
import {CityPropType} from "../../types";
import {Cities} from "../../const";
import {capitalizeWord} from "../../utils";
import {connect} from "react-redux";
import {getSelectedCity} from "../../store/reducers/app-process/selectors";

const Locations = (props) => {
  const {selectedCity, onChangeSelectedCity} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(Cities).map((city) =>
          <li key={city} className="locations__item">
            <a onClick={() => onChangeSelectedCity(Cities[city])} className={`locations__item-link tabs__item ${selectedCity === Cities[city] && `tabs__item--active`}`} href="#" data-city="${city}">
              <span>{capitalizeWord(city)}</span>
            </a>
          </li>)}
      </ul>
    </section>
  );
};

Locations.propTypes = {
  selectedCity: CityPropType.isRequired,
  onChangeSelectedCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSelectedCity: (selectedCity) => dispatch(ActionCreatorForProcess.changeSelectedCity(Cities[selectedCity].toUpperCase()))
});

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);

