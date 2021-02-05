import React from "react";
import { connect } from "react-redux";

import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { withRouter } from "react-router-dom";

const Burger = (props) => {
  let content = [];

  const item = Object.entries(props.orts);

  item.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });

  if (content.length === 0) content = <p>Бургерийн орцоо сонгоно уу...</p>;

  console.log(props);
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="burger-top" />
      {content}
      <BurgerIngredient type="burger-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orts: state.burgerReducer.ingredients,
  };
};

export default connect(mapStateToProps)(withRouter(Burger));
