import React from "react";
import {Cities} from "../../const";
import {capitalizeWord} from "../../utils";
import {connect} from "react-redux";
import {CityPropType} from "../../types";

const Locations = (props) => {
  const {selectedCity} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(Cities).map((city) =>
          <li key={city} className="locations__item">
            <a className={`locations__item-link tabs__item ${selectedCity === Cities[city] ? `tabs__item--active` : ``}`} href="#" data-city="${city}">
              <span>{capitalizeWord(city)}</span>
            </a>
          </li>)}
      </ul>
    </section>
  );
};

Locations.propTypes = {
  selectedCity: CityPropType
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
});

export {Locations};
export default connect(mapStateToProps)(Locations);

