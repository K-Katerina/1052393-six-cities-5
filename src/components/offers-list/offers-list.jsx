import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import PlaceCard from "../place-card/place-card";
import {connect} from "react-redux";
import {getSortOffers} from "../../store/reducers/app-data/selectors";

const OffersList = (props) => {
  const {sortOffers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers.map((offer) =>
        <PlaceCard
          key={offer.id}
          offer={offer}
        />)}
    </div>
  );
};

OffersList.propTypes = {
  sortOffers: PropTypes.arrayOf(OfferPropType),
};

const mapStateToProps = (state) => ({
  sortOffers: getSortOffers(state),
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
