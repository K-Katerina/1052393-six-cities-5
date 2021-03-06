import React, {useEffect} from "react";
import PropTypes from "prop-types";
import MainEmpty from "../../main-empty/main-empty";
import Header from "../../header/header";
import Locations from "../../locations/locations";
import Map from "../../map/map";
import OffersContainer from "../../offers-container/offers-container";
import {connect} from "react-redux";
import {getOfferByIdFactory, getOffersForCity} from "../../../store/reducers/app-data/selectors";
import {OfferPropType} from "../../../types";
import {getOffers} from "../../../store/api-actions";
import {getActiveOfferId} from "../../../store/reducers/app-process/selectors";

const MainPage = (props) => {
  const {isEmptyOffers, offers, activeOffer, loadOffers} = props;

  useEffect(() => {
    loadOffers();
  }, []);

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
                    <Map nearPlaces={offers} activeOffer={activeOffer}/>
                  </section>
                </div>
              </div>}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  isEmptyOffers: PropTypes.bool,
  offers: PropTypes.arrayOf(OfferPropType),
  activeOffer: OfferPropType,
  loadOffers: PropTypes.func
};

const mapStateToProps = (state) => ({
  isEmptyOffers: !getOffersForCity(state).length,
  offers: getOffersForCity(state),
  activeOffer: getOfferByIdFactory(getActiveOfferId(state))(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch(getOffers())
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

