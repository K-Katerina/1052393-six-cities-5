import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import * as leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    this.addMarkers(map, icon);
  }

  componentDidMount() {
    this.initMap();
  }

  addMarkers(map, icon) {
    this.props.offers.forEach((offer) => leaflet.marker(offer.coordinates, {icon}).addTo(map));
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType)
};

export default Map;
