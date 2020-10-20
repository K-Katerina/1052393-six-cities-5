import React from "react";
import {OfferPropType} from "../../../types";
import Header from "../../header/header";
import InfoProperty from "../../info-property/info-property";
import NearPlaces from "../../near-places/near-places";
import Map from "../../map/map";

const RoomPage = (props) => {
  const {offer} = props;
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
              <Map/>
            </section>
          </section>
          <div className="container">
            <NearPlaces/>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

RoomPage.propTypes = {
  offer: OfferPropType.isRequired,
};

export default RoomPage;
