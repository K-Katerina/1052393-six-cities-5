import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import "leaflet/dist/leaflet.css";
import * as leaflet from "leaflet";
import {connect} from "react-redux";
import {getActiveOfferId, getOffersByIdFactory, getSelectedCity} from "../../store/reducers/selectors";

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
    this.props.nearPlaces.filter((offer) => offer.id !== this.props.activeOfferId).forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon}).addTo(this.group);
    });
    if (this.props.activeOfferId > 0) {
      leaflet.marker(this.props.currentOffer.coordinates, {icon: activeIcon}).addTo(this.group);
    }
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  nearPlaces: PropTypes.arrayOf(OfferPropType),
  activeOfferId: PropTypes.number,
  selectedCity: CityPropType,
  currentOffer: OfferPropType
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCity(state),
  activeOfferId: getActiveOfferId(state),
  currentOffer: getOffersByIdFactory(getActiveOfferId(state))(state)
});

export {Map};
export default connect(mapStateToProps)(Map);
