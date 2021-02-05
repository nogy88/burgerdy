import React, { Component } from "react";
import { connect } from "react-redux";

import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

class ShippingPage extends Component {

  goBack = () => {
    this.props.history.goBack();
  };

  goContactData = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <h2>Таны захиалга амттай байх болно гэж найдаж байна...</h2>
        <h2>Дүн: {this.props.totalPrice}₮</h2>
        <Burger />

        <Button
          clicked={this.goBack}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />
        <Button
          clicked={this.goContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
