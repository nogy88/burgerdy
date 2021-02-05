import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import css from "./style.module.css";
import Button from "../General/Button";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/action/orderAction";

class ContactData extends Component {
  state = {
    name: null,
    city: null,
    street: null,
  };

  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      !this.props.newOrderStatus.error
    ) {
      this.props.history.replace("/orders");
    }
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };

  sendOrder = () => {
    const newOrder = {
      userId: this.props.userId,
      orts: this.props.ingredients,
      dun: this.props.price,
      hayag: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };

    this.props.saveOrderAction(newOrder);
    // this.setState({ loading: true });
    //promise ashigladag
  };

  render() {
    console.log(this.props);
    return (
      <div className={css.ContactData}>
        Дүн: {this.props.price}₮
        <div>
          {this.props.newOrderStatus.error &&
            `Захиалгыг хадгалах явцад алдаа гарлаа ${this.props.newOrderStatus.error}`}
        </div>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name="city"
              placeholder="Таны хот"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="Таны гэрийн хаяг"
            />
            <Button clicked={this.sendOrder} btnType="Success" text="ИЛГЭЭХ" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupLoginReducer.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
