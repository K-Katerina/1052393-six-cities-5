import {TypeCards} from "../../const";
import OfferCard from "../offer-card/offer-card";

class NearPlaceCard extends OfferCard {
  getTypeCard() {
    return TypeCards.NEAR_PLACES;
  }

  getPlaceCardWidth() {
    return 260;
  }

  getPlaceCardHeight() {
    return 200;
  }
}

export default NearPlaceCard;
