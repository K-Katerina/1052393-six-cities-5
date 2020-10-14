import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {TypeCards} from "../../const";
import NearPlaceCard from "../near-place-card/near-place-card";

class NearPlaces extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
  }

  setActiveOffer(offer) {
    const {onSelectActiveCard} = this.props;
    this.setState({
      activeOffer: offer,
    });
    onSelectActiveCard(offer);
  }

  render() {
    const {offers} = this.props;
    return (
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) =>
            <NearPlaceCard
              key={offer.id}
              offer={offer}
              onHover={() => this.setActiveOffer(offer)}
              typeCard={TypeCards.NEAR_PLACES}
            />)}
        </div>
      </section>
    );
  }
}

NearPlaces.propTypes = {
  onSelectActiveCard: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropType),
};

export default NearPlaces;
