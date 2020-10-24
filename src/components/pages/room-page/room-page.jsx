import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import InfoProperty from "../../info-property/info-property";
import Header from "../../header/header";
import NearPlaces from "../../near-places/near-places";
import Map from "../../map/map";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/actions";

class RoomPage extends React.Component {

  componentDidMount() {
    this.props.changeSelectedCity(this.props.offer.city);
    this.props.changeActiveOffer(this.props.offer.id);
  }

  render() {
    const {offer} = this.props;
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
              <NearPlaces selectedOffer={offer}/>
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
  changeActiveOffer: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  offer: state.offers.find((it) => it.id === Number(ownProps.match.params.id))
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedCity: (city) => dispatch(ActionCreator.changeSelectedCity(city)),
  changeActiveOffer: (activeOffer) => dispatch(ActionCreator.changeActiveOffer(activeOffer)),
});

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);

