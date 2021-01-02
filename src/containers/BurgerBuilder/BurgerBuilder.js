import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
	salad: 0.5,
	bacon: 1.2,
	cheese: 1,
	meat: 3
};

const BASIC_PRICE = 15;

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 0,
		purchasable: false,
		purchasing: false
	};

	purchaseHandler = () => {
		this.setState({purchasing: true})
	};

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	};
	purchaseContinueHandler = () => {
		alert("You continue order!");
	};

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey]
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		this.setState({purchasable: sum > 0});
	};

	ingredientsAddHandler = (type) => {
		const updatedIngredients = {
			...this.state.ingredients
		};
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		updatedIngredients[type] = updatedCount;

		const priceAddition = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		let basicPrice = 0;
		if ( oldPrice == 0 ) basicPrice = BASIC_PRICE
		const updatedPrice = oldPrice + priceAddition + basicPrice;

		this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	};

	ingredientsRemoveHandler = (type) => {
		const updatedIngredients = {
			...this.state.ingredients
		};
		const oldCount = this.state.ingredients[type];
		if ( oldCount <=0 ) return;
		const updatedCount = oldCount - 1;
		updatedIngredients[type] = updatedCount;

		const priceDeduction = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		let fullDeduction = 0;
		if ( ( oldPrice - priceDeduction ) == BASIC_PRICE ) fullDeduction = BASIC_PRICE
		const updatedPrice = oldPrice - priceDeduction - fullDeduction;

		this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	} 
	
	render () {
		const disabled = {
			...this.state.ingredients
		};
		for ( let key in disabled) {
			disabled[key] = disabled[key] <= 0
		}

		return (
			<Aux>
				<Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						cancelledOrder={this.purchaseCancelHandler}
						continuedOrder={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls
					ingredientsAdded={this.ingredientsAddHandler}
					ingredientsRemoved={this.ingredientsRemoveHandler}
					ingredientCount={this.state.ingredients}
					price={this.state.totalPrice}
					disabled={disabled}
					emptyOrder={!this.state.purchasable}
					purchase={this.purchaseHandler}/>
			</Aux>
		);
	}
}

export default BurgerBuilder;