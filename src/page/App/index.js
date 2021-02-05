import React, { Component } from "react";
import style from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../../page/BurgerPage";
import SideBar from "../../components/SideBar";
import OrdersPage from "../OrdersPage";
import { Route, Switch } from "react-router-dom";
import {Redirect} from "react-router-dom"
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import Logout from "../../components/Logout";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginActions"
import * as signupActions from "../../redux/action/signupActions"


class App extends Component {
  state = {
    showSideBar: false,
  };

  componentDidMount = () => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const expiresDate = new Date(localStorage.getItem('expiresDate'));
    const refreshToken = localStorage.getItem('refreshToken');

    if(userId){
      if(expiresDate > new Date()){
        // hugatsaa n duusagui token bn, autologin hiine
        this.props.autoLogin(token,userId);
        // token huchintei bolohod uldej bga hugatsag olj ter hugatsanii auto logout hiine
        this.props.autoLogoutAfterMillisec(expiresDate.getTime() - new Date().getTime())
      } else {
          // token hugatsaa n duussan bn
          this.props.logout();
      }
    }
  }

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={style.Content}>
          
          {/* User ID: {this.props.userId} */}

          {this.props.userId ? (
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/orders" component={OrdersPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
           ) : (
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Redirect to="login"/>
          </Switch>
        )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) => dispatch(actions.loginUserSucces(token, userId)),   
    autoLogout: () => dispatch(signupActions.logout()),
    autoLogoutAfterMillisec: () => dispatch(signupActions.autoLogoutAfterMillisec()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
