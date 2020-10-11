import React from "react";
import PlaceCard from "../place-card/place-card";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";

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
    const isMainCard = false;
    return (
      <React.Fragment>
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {offers.map((offer) =>
              <PlaceCard
                key={offer.id}
                offer={offer}
                onHover={() => this.setActiveOffer(offer)}
                isMainCard={isMainCard}
              />)}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

NearPlaces.propTypes = {
  onSelectActiveCard: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropType),
};

export default NearPlaces;
