import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import "leaflet/dist/leaflet.css";
import * as leaflet from "leaflet";
import {connect} from "react-redux";
import {getOffersForCity} from "../../utils";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    const zoom = 12;
    const coordinates = this.props.offers[0].coordinatesCity;
    this.map = leaflet.map(`map`, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(coordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.addMarkers(this.map);
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this.initMap();
  }

  addMarkers(map) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this.props.offers.forEach((offer) => {
      if (offer.id === this.props.activeOffer) {
        leaflet.marker(offer.coordinates, {icon: activeIcon}).addTo(map);
      } else {
        leaflet.marker(offer.coordinates, {icon}).addTo(map);
      }
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  activeOffer: PropTypes.number
};

const mapStateToProps = (state) => ({
  offers: getOffersForCity(state.selectedCity, state.offers),
  selectedCity: state.selectedCity,
  activeOffer: state.activeOffer
});

export {Map};
export default connect(mapStateToProps)(Map);
