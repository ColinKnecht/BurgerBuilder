import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
    });
    return (
        <Auxiliary>
            <h3>Your Order Summary</h3>
            <p>A Delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue To CHeckout?</p>
        </Auxiliary>
    );
};

export default orderSummary;