import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>
        Таны сонгосон орцууд:
        {Object.keys(props.ingredientNames).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]}: {props.ingredients[el]}
          </li>
        ))}
      </p>
      <p>
        <strong>Нийт үнэ: {props.price}₮</strong>
      </p>
      <p>Та цааш үргэлжлүүлэх үү?</p>
      <Button
        clicked={props.closeConfirmModal}
        btnType="Danger"
        text="ТАТГАЛЗАХ"
      />
      <Button
        clicked={props.continueOrder}
        btnType="Success"
        text="ҮРГЭЛЖЛҮҮЛЭХ"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
    ingredientNames: state.burgerReducer.ingredientNames,
    ingredients: state.burgerReducer.ingredients,
  };
};

export default connect(mapStateToProps)(OrderSummary);
