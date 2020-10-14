import {TypeCards} from "../../const";
import OfferCard from "../offer-card/offer-card";

class FavoriteCard extends OfferCard {

  constructor(props) {
    super(props);
  }

  getTypeCard() {
    return TypeCards.FAVORITES;
  }

  getPlaceCardWidth() {
    return 150;
  }

  getPlaceCardHeight() {
    return 110;
  }
}

export default FavoriteCard;
