import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import InfoProperty from "../../info-property/info-property";
import Header from "../../header/header";
import NearPlaces from "../../near-places/near-places";
import Map from "../../map/map";
import {connect} from "react-redux";

const RoomPage = (props) => {
  const {offers} = props;
  const offerId = +props.match.params.id;
  const offer = offers.find((it) => it.id === offerId);
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
  offers: PropTypes.arrayOf(OfferPropType),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export {RoomPage};
export default connect(mapStateToProps)(RoomPage);

