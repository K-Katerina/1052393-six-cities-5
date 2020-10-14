import React from "react";
import {OfferPropType} from "../../../types";
import PropTypes from "prop-types";
import Header from "../../header/header";
import InfoProperty from "../../info-property/info-property";
import NearPlaces from "../../near-places/near-places";
import Map from "../../map/map";

const MAX_NEAR_PLACES = 3;

class RoomPage extends React.PureComponent {

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
    const {offer, offers} = this.props;
    const {activeOffer} = this.state;
    const nearOffers = offers.slice(0, MAX_NEAR_PLACES);
    return (
      <React.Fragment>
        <div className="page">
          <Header/>
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offer.photos.map((photo) =>
                    <div key={offer.id + photo} className="property__image-wrapper">
                      <img className="property__image" src={photo} alt="Photo studio"/>
                    </div>
                  )}
                </div>
              </div>
              <InfoProperty offer={offer}/>
              <section className="property__map map">
                <Map offers={nearOffers} activeOffer={activeOffer}/>
              </section>
            </section>
            <div className="container">
              <NearPlaces
                offers={nearOffers}
                onSelectActiveCard={(selectOffer) => this.setActiveOffer(selectOffer)}
              />
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

RoomPage.propTypes = {
  offer: OfferPropType.isRequired,
  offers: PropTypes.arrayOf(OfferPropType)
};

export default RoomPage;
