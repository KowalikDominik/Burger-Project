import React from 'react';
import classes from './Order.module.css';

const order = (props) => {

	const ingredients = [];
	for (let name in props.ingredients) {
		ingredients.push({
			name: name,
			amount: props.ingredients[name]
		});
	}
	
	const ingredientsOut = ingredients.map(ingr => {
		return ingr.amount !== 0 ? <span
			key={ingr.name}
			style={classes.Span}>
			{ingr.name}(<strong>{ingr.amount}</strong>)
		</span> : null
	});
	
	return(
		<div className={classes.Order}>
			<p>Burger No. {props.orderNo}</p>
			<p>Ingredients: {ingredientsOut}</p>
			<p>Price: <strong>{props.price}</strong></p>
			
		</div>
		)
}

export default order;