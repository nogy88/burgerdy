import React from 'react';
import css from './style.module.css';

const Order = (props) => {
    return (
        <div className={css.Order}>
            <h4>Хаяг: {props.order.hayag.name}, {props.order.hayag.city}, {props.order.hayag.street}</h4>
            <p> Гахайн мах: {props.order.orts.bacon} | Үхрийн мах: {props.order.orts.meat} | Бяслаг: {props.order.orts.cheese} | Салад: {props.order.orts.salad}</p>
            <h3>{props.order.dun}₮</h3>
        </div>
    )
}

export default Order;