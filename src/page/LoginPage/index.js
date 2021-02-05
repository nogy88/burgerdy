import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  login = () => {
    this.props.login(this.state.email, this.state.password);
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Redirect to="/"/>}
        <input
          type="text"
          onChange={this.changeEmail}
          placeholder="Имэйл хаяг"
        />
        <input
          type="password"
          onChange={this.changePassword}
          placeholder="Нууц үг"
        />

        {this.props.loggingIn && <Spinner />}

        {this.props.firebaseError && (
          <div style={{ color: "red" }}>{this.props.firebaseError}</div>
        )}

        {this.props.userId && <Redirect to="/orders" />}

        <Button text="ЛОГИН" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggingIn: state.signupLoginReducer.loggingIn,
    firebaseError: state.signupLoginReducer.firebaseError,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
