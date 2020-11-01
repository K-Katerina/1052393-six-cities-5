import React, {createRef} from "react";
import {Link} from "react-router-dom";
import {Cities} from "../../../const";
import PropTypes from "prop-types";
import Header from "../../header/header";
import {connect} from "react-redux";
import {login} from "../../../store/api-actions";

class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {onSubmit} = this.props;
    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page page--gray page--login">
          <Header/>
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <form className="login__form form" action="" method="post" onSubmit={this.handleSubmit}>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input ref={this.loginRef} className="login__input form__input" type="email" name="email" placeholder="Email"
                      required/>
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input ref={this.passwordRef} minLength={5} className="login__input form__input" type="password" name="password" placeholder="Password"
                      required/>
                  </div>
                  <button className="login__submit form__submit button" type="submit">Sign in</button>
                </form>
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <Link to="/" className="locations__item-link">
                    <span>{Object.keys(Cities)[0]}</span>
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

SignInPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export default connect(null, mapDispatchToProps)(SignInPage);
