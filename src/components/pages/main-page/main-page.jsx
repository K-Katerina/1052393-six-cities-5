import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import Header from "../../header/header";
import {OffersList} from "../../offers-list/offers-list";

export class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
  }
  render() {
    const {offers} = this.props;

    return (
      <React.Fragment>
        <div className="page page--gray page--main">
          <Header/>
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <ul className="locations__list tabs__list">
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Paris</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Cologne</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Brussels</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item tabs__item--active">
                      <span>Amsterdam</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Hamburg</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Dusseldorf</span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                <OffersList offers={offers}
                  onSelectActiveCard={(offer) => {
                    this.setState({
                      activeOffer: offer,
                    });
                  }}/>
                <div className="cities__right-section">
                  <section className="cities__map map"></section>
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
