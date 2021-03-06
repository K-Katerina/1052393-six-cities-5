import React from "react";
import {CityPropType} from "../../types";
import {capitalizeWord} from "../../utils";
import {connect} from "react-redux";
import {getSelectedCity} from "../../store/reducers/app-process/selectors";

const MainEmpty = (props) => {
  return (
    <React.Fragment>
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {capitalizeWord(props.selectedCity)}</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </React.Fragment>
  );
};

MainEmpty.propTypes = {
  selectedCity: CityPropType
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCity(state)
});

export {MainEmpty};
export default connect(mapStateToProps)(MainEmpty);
