import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import PlaceCard from "../place-card/place-card";
import {Sort} from "../sort/sort";
import {connect} from "react-redux";

const OffersList = (props) => {
  const {offers} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <Sort/>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <PlaceCard
            key={offer.id}
            offer={offer}
          />)}
      </div>
    </section>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
