import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import NearPlacesCard from "../near-place-card/near-place-card";

const NearPlaces = (props) => {
  const {nearPlaces} = props;
  return (
    <React.Fragment>
      {nearPlaces.length > 1 &&
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearPlaces.map((offer) =>
              <NearPlacesCard
                offer={offer}
                key={offer.id}
              />)}
          </div>
        </section>}
    </React.Fragment>
  );
};

NearPlaces.propTypes = {
  nearPlaces: PropTypes.arrayOf(OfferPropType)
};

export {NearPlaces};
