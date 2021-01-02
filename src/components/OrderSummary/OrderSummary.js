import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Button from '../UI/Button/Button';
import classes from './OrderSummary.module.css';
const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map((IgKey) => (
				<li
					style={{textTransform: 'capitalize'}}
				 	key={IgKey}>
				 	<span>{IgKey}</span> : {props.ingredients[IgKey]}
				</li>)
		)

	return(
		<Aux>
			<h3>Your Order</h3>
			<p>Your burger with the follwing ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total price: {props.price.toFixed(2)} zł</strong></p>
			<p>Continue to checkout?</p>
			<div className={classes.ButtonWrapper}>
				<Button btnType="Danger" clicked={props.cancelledOrder}>Cancel</Button>
				<Button btnType="Success" clicked={props.continuedOrder}>OK</Button>
			</div>		
		</Aux>
	)
}

export default orderSummary;