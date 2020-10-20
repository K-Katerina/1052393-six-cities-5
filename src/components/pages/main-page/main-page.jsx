import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../../types";
import {getOffersForCity} from "../../../utils";
import MainEmpty from "../../main-empty/main-empty";
import Header from "../../header/header";
import Locations from "../../locations/locations";
import Map from "../../map/map";
import OffersList from "../../offers-list/offers-list";
import {connect} from "react-redux";

const MainPage = (props) => {
  const {offers, selectedCity} = props;
  const isEmptyOffers = !getOffersForCity(selectedCity, offers).length;
  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header/>
        <main className={`page__main page__main--index ${isEmptyOffers ? `page__main--index-empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations/>
          </div>
          <div className="cities">
            { isEmptyOffers ? <MainEmpty/> :
              <div className="cities__places-container container">
                <OffersList/>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map/>
                  </section>
                </div>
              </div> }
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  selectedCity: CityPropType
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  selectedCity: state.selectedCity
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);

