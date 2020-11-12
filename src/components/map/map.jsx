import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import "leaflet/dist/leaflet.css";
import * as leaflet from "leaflet";
import {connect} from "react-redux";
import {getSelectedCity} from "../../store/reducers/app-process/selectors";

const Map = (props) => {
  const {nearPlaces, activeOffer, selectedCity} = props;
  const map = useRef(null);
  const mapRef = useRef(null);
  let group = null;

  useEffect(() => {
    initMap();
    return () => {
      map.current.remove();
    };
  }, [selectedCity]);

  useEffect(() => {
    addMarkers();
    return () => {
      group.clearLayers();
    };
  }, [activeOffer, selectedCity]);

  const initMap = () => {
    const zoom = nearPlaces[0].coordinatesCity.zoom;
    const coordinates = nearPlaces[0].coordinatesCity;
    map.current = leaflet.map(mapRef.current, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.current.setView(coordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map.current);
  };

  const addMarkers = () => {
    group = leaflet.layerGroup().addTo(map.current);
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    if (activeOffer) {
      leaflet.marker(activeOffer.coordinates, {icon: activeIcon}).addTo(group);
    }
    nearPlaces.filter((offer) => offer !== activeOffer).forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon}).addTo(group);
    });
  };

  return <div ref={mapRef} id="map" style={{height: `100%`}}></div>;
};

Map.propTypes = {
  nearPlaces: PropTypes.arrayOf(OfferPropType),
  selectedCity: CityPropType,
  activeOffer: OfferPropType
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCity(state),
});

export {Map};
export default connect(mapStateToProps)(Map);
