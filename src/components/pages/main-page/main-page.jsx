import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import Header from "../../header/header";
import Map from "../../map/map";
import {OffersList} from "../../offers-list/offers-list";
import Locations from "../../locations/locations";

export class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
  }

  setActiveOffer(offer) {
    this.setState({
      activeOffer: offer,
    });
  }

  render() {
    const {offers} = this.props;
    const {activeOffer} = this.state;
    return (
      <React.Fragment>
        <div className="page page--gray page--main">
          <Header/>
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <Locations/>
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                <OffersList
                  offers={offers}
                  onSelectActiveCard={(offer) => this.setActiveOffer(offer)}/>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map offers={offers} activeOffer={activeOffer}/>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
};
