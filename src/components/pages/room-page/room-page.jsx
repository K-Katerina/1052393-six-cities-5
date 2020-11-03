import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
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
import PhotosList from "../../photos-list/photos-list";

class RoomPage extends React.Component {
  componentDidMount() {
    this.props.getOffer(this.props.id);
    this.props.getNearPlacesByOfferId(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (Number(prevProps.match.params.id) !== this.props.id) {
      this.props.getOffer(this.props.id);
      this.props.getNearPlacesByOfferId(this.props.id);
    }
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
                <PhotosList photos={currentOffer.photos}/>
              </div>
              <InfoProperty offer={currentOffer}/>
              <section className="property__map map">
                {nearPlaces.length && <Map nearPlaces={nearPlaces} activeOffer={currentOffer}/>}
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
  nearPlaces: PropTypes.arrayOf(OfferPropType),
  isLoading: PropTypes.bool,
  match: PropTypes.object,
  id: PropTypes.number,
  getOffer: PropTypes.func,
  getNearPlacesByOfferId: PropTypes.func,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
