import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/action/orderAction";

class OrdersPage extends Component {
  componentDidMount = () => {
    this.props.loadOrders(this.props.userId);
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signupLoginReducer.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => {
      dispatch(actions.loadOrders(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
