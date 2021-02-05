import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/action/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };

  signup = () => {
    if (this.state.password1 === this.state.password2) {
      // alert("signing up...." + this.state.email + " " + this.state.password1);
      this.props.signupUser(this.state.email, this.state.password1);
    } else {
      this.setState({ error: "нууц үг хоорондоо таарахгүй байна!" });
    }
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };

  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  render() {
    return (
      <div className={css.Signup}>
        {this.props.userId && <Redirect to="/orders"/>}
        <h1>Бүртгэл үүсгэх</h1>
        <div>Мэдээллээ оруулна уу</div>
        <input
          type="text"
          onChange={this.changeEmail}
          placeholder="Имэйл хаяг"
        />
        <input
          type="password"
          onChange={this.changePassword1}
          placeholder="Нууц үгээ оруулна уу"
        />
        <input
          type="password"
          onChange={this.changePassword2}
          placeholder="Нууц үгээ давтан оруулна уу"
        />
        
        {this.state.error &&  <div style={{color: "red"}}>{this.state.error}</div>}
        
        {this.props.firebaseError && <div style={{color: "red"}}>{this.props.firebaseError}</div>}

        {this.props.saving && <Spinner />}

        <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={this.signup} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    saving: state.signupLoginReducer.saving,
    firebaseError: state.signupLoginReducer.firebaseError,
    userId: state.signupLoginReducer.userId 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
