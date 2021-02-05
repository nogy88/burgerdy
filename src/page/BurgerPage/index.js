import React, { Component } from "react";
import Burger from "../../components/Burger";
import BurgerControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
    loading: false,
  };

  continueOrder = () => {
    const params = [];
    let price = 0;

    this.closeConfirmModal();
    this.props.history.push("/ship");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.showSpinner ? (
            <Spinner />
          ) : (
            <OrderSummary
              continueOrder={this.continueOrder}
              closeConfirmModal={this.closeConfirmModal}
            />
          )}
        </Modal>
        {this.state.loading && <Spinner />}

        <Burger />
        <BurgerControls showConfirmModal={this.showConfirmModal} />
      </div>
    );
  }
}

export default BurgerPage;
