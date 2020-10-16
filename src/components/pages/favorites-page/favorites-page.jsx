import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../../types";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import FavoriteList from "../../favorite-list/favorite-list";

class FavoritesPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFavoriteOffer: null
    };
  }

  render() {
    const {offers} = this.props;
    return (
      <React.Fragment>
        <div className="page">
          <Header/>
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteList offers = {offers}/>
              </section>
            </div>
          </main>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType)
};

export default FavoritesPage;
