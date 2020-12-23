import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad'},
	{ label: 'Bacon', type: 'bacon'},
	{ label: 'Cheese', type: 'cheese'},
	{ label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
	return(
		<div className={classes.BuildControls}>
			{!props.emptyOrder ?
				<p>Cena <strong> {props.price.toFixed(2)} </strong> zł</p>
				: <p><strong>Add ingedients !</strong></p> }
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientsAdded(ctrl.type)}
					removed={() => props.ingredientsRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
					count={props.ingredientCount[ctrl.type]}
					/>
			))}
			<button onClick={props.purchase} className={classes.OrderButton} disabled={props.emptyOrder}>Order Now!</button>
		</div>
	)

}

export default buildControls;