import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import FavoriteList from "../../favorite-list/favorite-list";

const FavoritesPage = () => {
  return (
    <React.Fragment>
      <div className="page">
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteList/>
            </section>
          </div>
        </main>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

FavoritesPage.propTypes = {
};

export default FavoritesPage;
