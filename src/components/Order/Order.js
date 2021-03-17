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
		return <span
		key={ingr.name}
		style={{
			textTransform: 'capitalize',
			display: 'inline-block',
			margin: '2px 6px',
			border: '1px solid #ccc',
			padding: '5px'
		}}>{ingr.name}({ingr.amount}) </span>
	})

	return(
		<div className={classes.Order}>
			<p>Ingredients: {ingredientsOut}</p>
		</div>
		)
}

export default order;