import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import {ActionCreator} from "../../../store/actions";
import InfoProperty from "../../info-property/info-property";
import {
  getCurrentNearPlaces,
  getCurrentOffer,
  isLoadedOfferById, isLoadedOffers,
} from "../../../store/reducers/selectors";
import {NearPlaces} from "../../near-places/near-places";
import Header from "../../header/header";
import Map from "../../map/map";
import {connect} from "react-redux";
import {getNearPlacesByOfferId, getOfferById} from "../../../store/api-actions";
import Loader from "../../loader/loader";

class RoomPage extends React.Component {
  componentDidMount() {
    this.props.getOffer(this.props.id);
    this.props.getNearPlacesByOfferId(this.props.id);
    this.props.changeActiveOffer(this.props.id);
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.currentOffer ? this.props.currentOffer.id : '');
    if (!this.props.isLoading && (Number(prevProps.match.params.id) !== this.props.currentOffer.id)) {
      this.props.isLoadedOfferById(true);
      this.props.getOffer(this.props.id);
      this.props.changeActiveOffer(this.props.id);
    }
  }

  componentWillUnmount() {
    this.props.changeSelectedCity(this.props.currentOffer.cityName);
    this.props.changeActiveOffer(-1);
    this.props.isLoadedOfferById(true);
  }

  render() {
    const {currentOffer, nearPlaces, isLoading} = this.props;
    if (isLoading) {
      return <Loader/>;
    }
    return (
      <React.Fragment>
        <div className="page">
          <Header/>
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {currentOffer.photos.map((photo) =>
                    <div key={currentOffer.id + photo} className="property__image-wrapper">
                      <img className="property__image" src={photo} alt="Photo studio"/>
                    </div>
                  )}
                </div>
              </div>
              <InfoProperty offer={currentOffer}/>
              <section className="property__map map">
                <Map nearPlaces={nearPlaces}/>
              </section>
            </section>
            <div className="container">
              <NearPlaces nearPlaces={nearPlaces}/>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

RoomPage.propTypes = {
  currentOffer: OfferPropType,
  changeSelectedCity: PropTypes.func,
  changeActiveOffer: PropTypes.func,
  nearPlaces: PropTypes.arrayOf(OfferPropType),
  isLoading: PropTypes.bool,
  match: PropTypes.object,
  id: PropTypes.number,
  getOffer: PropTypes.func,
  getNearPlacesByOfferId: PropTypes.func,
  isLoadedOfferById: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  isLoading: isLoadedOfferById(state) || isLoadedOffers(state),
  currentOffer: getCurrentOffer(state),
  nearPlaces: getCurrentNearPlaces(state),
  id: Number(ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  getOffer: (id) => dispatch(getOfferById(id)),
  getNearPlacesByOfferId: (id) => dispatch(getNearPlacesByOfferId(id)),
  changeSelectedCity: (city) => dispatch(ActionCreator.changeSelectedCity(city.toUpperCase())),
  changeActiveOffer: (activeOffer) => dispatch(ActionCreator.changeActiveOffer(activeOffer)),
  isLoadedOfferById: (isLoaded) => dispatch(ActionCreator.isLoadedOfferById(isLoaded))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
