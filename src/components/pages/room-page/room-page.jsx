import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import InfoProperty from "../../info-property/info-property";
import {
  getCurrentNearPlaces,
  getCurrentOffer,
  isLoadedOfferById,
} from "../../../store/reducers/app-data/selectors";
import {NearPlaces} from "../../near-places/near-places";
import Header from "../../header/header";
import Map from "../../map/map";
import {connect} from "react-redux";
import {getNearPlacesByOfferId, getOfferById} from "../../../store/api-actions";
import Loader from "../../loader/loader";
import PhotosList from "../../photos-list/photos-list";
import {ActionCreatorForData} from "../../../store/reducers/app-data/actions";

const RoomPage = (props) => {
  const {activeOffer, nearPlaces, isLoading, getOffer, loadNearPlacesByOfferId, id, resetCurrentOffer} = props;

  useEffect(() => {
    getOffer(id);
    loadNearPlacesByOfferId(id);
    return () => resetCurrentOffer();
  }, [id]);

  if (isLoading || !activeOffer) {
    return <Loader/>;
  }
  return (
    <React.Fragment>
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <PhotosList photos={activeOffer.photos}/>
            </div>
            <InfoProperty offer={activeOffer}/>
            <section className="property__map map">
              {nearPlaces.length && <Map nearPlaces={nearPlaces} activeOffer={activeOffer}/>}
            </section>
          </section>
          <div className="container">
            <NearPlaces nearPlaces={nearPlaces}/>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

RoomPage.propTypes = {
  activeOffer: OfferPropType,
  nearPlaces: PropTypes.arrayOf(OfferPropType),
  isLoading: PropTypes.bool,
  match: PropTypes.object,
  id: PropTypes.number,
  getOffer: PropTypes.func,
  loadNearPlacesByOfferId: PropTypes.func,
  resetCurrentOffer: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  isLoading: isLoadedOfferById(state),
  activeOffer: getCurrentOffer(state),
  nearPlaces: getCurrentNearPlaces(state),
  id: Number(ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  getOffer: (id) => dispatch(getOfferById(id)),
  loadNearPlacesByOfferId: (id) => dispatch(getNearPlacesByOfferId(id)),
  resetCurrentOffer: () => dispatch(ActionCreatorForData.updateOfferById(null)),
});

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
