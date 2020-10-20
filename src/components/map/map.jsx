import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import "leaflet/dist/leaflet.css";
import * as leaflet from "leaflet";
import {connect} from "react-redux";
import {getOffersForCity} from "../../utils";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    this.map = leaflet.map(`map`, {
      center: this.props.selectedCity.coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.props.selectedCity.coordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.addMarkers(this.map, icon);
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this.initMap();
  }

  addMarkers(map, icon) {
    const offersForCity = getOffersForCity(this.props.selectedCity, this.props.offers);
    offersForCity.forEach((offer) => leaflet.marker(offer.coordinates, {icon}).addTo(map));
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  selectedCity: CityPropType
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  selectedCity: state.selectedCity
});

export {Map};
export default connect(mapStateToProps)(Map);
