import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.module.css';

const burger = ( props ) => {
	console.log(props);
	let transpormedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [	...Array(props.ingredients[igKey])]
				.map((_, i) => {
					return <BurgerIngredient key={igKey+i} type={igKey} />
				});
	}).reduce((arr,el) => {
		return arr.concat(el);
	}, []);

	if(transpormedIngredients.length === 0){
		transpormedIngredients = <p>Please start adding ingredients.</p>
	}

	return(
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transpormedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
		);
};

export default burger;