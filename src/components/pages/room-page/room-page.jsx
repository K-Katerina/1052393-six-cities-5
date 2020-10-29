import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import InfoProperty from "../../info-property/info-property";
import Header from "../../header/header";
import Map from "../../map/map";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/actions";
import {getOffersById, getNearPlacesFactory, getActiveOffer} from "../../../store/reducers/selectors";
import {NearPlaces} from "../../near-places/near-places";

class RoomPage extends React.Component {

  componentDidMount() {
    this.props.changeSelectedCity(this.props.offer.cityName);
    this.props.changeActiveOffer(this.props.offer.id);
  }

  render() {
    const {offer, offers} = this.props;
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
                <Map nearPlaces={offers}/>
              </section>
            </section>
            <div className="container">
              <NearPlaces nearPlaces={offers.filter((it) => it.id !== offer.id)}/>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

RoomPage.propTypes = {
  offer: OfferPropType,
  changeSelectedCity: PropTypes.func,
  changeActiveOffer: PropTypes.func,
  offers: PropTypes.arrayOf(OfferPropType),
  activeOffer: PropTypes.number
};

const mapStateToProps = (state, ownProps) => ({
  offer: getOffersById(Number(ownProps.match.params.id), state),
  offers: getNearPlacesFactory(Number(ownProps.match.params.id), state)(state),
  activeOffer: getActiveOffer(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedCity: (city) => dispatch(ActionCreator.changeSelectedCity(city.toUpperCase())),
  changeActiveOffer: (activeOffer) => dispatch(ActionCreator.changeActiveOffer(activeOffer))
});

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);

