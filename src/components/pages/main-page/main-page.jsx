import React from "react";
import Header from "../../header/header";
import Locations from "../../locations/locations";
import Map from "../../map/map";
import OffersList from "../../offers-list/offers-list";

const MainPage = () => {
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
              <OffersList/>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
};

export {MainPage};
