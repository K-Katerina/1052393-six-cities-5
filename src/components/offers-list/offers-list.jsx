import PlaceCard from "../place-card/place-card";
import {Sort} from "../sort/sort";
import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";

export class OffersList extends React.PureComponent {
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
      <React.Fragment>
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <Sort/>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) =>
              <PlaceCard
                key={offer.id}
                offer={offer}
                onHover={() => this.setActiveOffer(offer)}
              />)}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

OffersList.propTypes = {
  onSelectActiveCard: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropType),
};
