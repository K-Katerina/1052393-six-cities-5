import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import "leaflet/dist/leaflet.css";
import * as leaflet from "leaflet";
import {connect} from "react-redux";
import {getActiveOffer, getSelectedCity} from "../../store/reducers/selectors";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    const zoom = this.props.nearPlaces[0].coordinatesCity.zoom;
    const coordinates = this.props.nearPlaces[0].coordinatesCity;
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

    this.group = leaflet.layerGroup().addTo(this.map);
    this.addMarkers();
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCity !== this.props.selectedCity) {
      this.map.remove();
      this.initMap();
    } else {
      this.group.clearLayers();
      this.addMarkers();
    }
  }

  addMarkers() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this.props.nearPlaces.forEach((offer) => {
      if (offer.id === this.props.activeOffer) {
        leaflet.marker(offer.coordinates, {icon: activeIcon}).addTo(this.group);
      } else {
        leaflet.marker(offer.coordinates, {icon}).addTo(this.group);
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
  nearPlaces: PropTypes.arrayOf(OfferPropType),
  activeOffer: PropTypes.number,
  selectedCity: CityPropType
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCity(state),
  activeOffer: getActiveOffer(state)
});

export {Map};
export default connect(mapStateToProps)(Map);
