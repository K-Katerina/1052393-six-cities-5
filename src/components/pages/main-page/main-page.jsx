import React from "react";
import PropTypes from "prop-types";
import MainEmpty from "../../main-empty/main-empty";
import Header from "../../header/header";
import Locations from "../../locations/locations";
import Map from "../../map/map";
import OffersContainer from "../../offers-container/offers-container";
import {connect} from "react-redux";
import {getActiveOfferId, getOffersByIdFactory, getOffersForCity} from "../../../store/reducers/selectors";
import {OfferPropType} from "../../../types";

const MainPage = (props) => {
  const {isEmptyOffers, offers} = props;
  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header/>
        <main className={`page__main page__main--index ${isEmptyOffers && `page__main--index-empty`}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations/>
          </div>
          <div className="cities">
            {isEmptyOffers ? <MainEmpty/> :
              <div className="cities__places-container container">
                <OffersContainer/>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map nearPlaces={offers} activeOffer={props.activeOffer}/>
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
  isEmptyOffers: PropTypes.bool,
  offers: PropTypes.arrayOf(OfferPropType),
  activeOffer: OfferPropType
};

const mapStateToProps = (state) => ({
  isEmptyOffers: !getOffersForCity(state).length,
  offers: getOffersForCity(state),
  activeOffer: getOffersByIdFactory(getActiveOfferId(state))(state)
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);

