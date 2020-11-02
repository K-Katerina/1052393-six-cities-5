import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import {ActionCreator} from "../../../store/actions";
import InfoProperty from "../../info-property/info-property";
import {
  getOffersByIdFactory,
  getNearPlacesFactory,
  isLoaded,
} from "../../../store/reducers/selectors";
import {NearPlaces} from "../../near-places/near-places";
import withLoader from "../../../hocs/with-loader/with-loader";
import {compose} from "redux";
import Header from "../../header/header";
import Map from "../../map/map";
import {connect} from "react-redux";

class RoomPage extends React.Component {

  componentDidMount() {
    this.props.changeSelectedCity(this.props.offer.cityName);
    this.props.changeActiveOffer(this.props.offer.id);
  }

  componentDidUpdate(prevProps) {
    if (Number(prevProps.match.params.id) !== this.props.offer.id) {
      this.props.changeSelectedCity(this.props.offer.cityName);
      this.props.changeActiveOffer(this.props.offer.id);
    }
  }

  componentWillUnmount() {
    this.props.changeActiveOffer(-1);
  }

  render() {
    const {offer, nearPlaces} = this.props;

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
  offer: OfferPropType,
  changeSelectedCity: PropTypes.func,
  changeActiveOffer: PropTypes.func,
  nearPlaces: PropTypes.arrayOf(OfferPropType),
  isLoading: PropTypes.bool,
  match: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  isLoading: isLoaded(state),
  offer: getOffersByIdFactory(Number(ownProps.match.params.id))(state),
  nearPlaces: getNearPlacesFactory(Number(ownProps.match.params.id))(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedCity: (city) => dispatch(ActionCreator.changeSelectedCity(city.toUpperCase())),
  changeActiveOffer: (activeOffer) => dispatch(ActionCreator.changeActiveOffer(activeOffer))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoader)(RoomPage);
