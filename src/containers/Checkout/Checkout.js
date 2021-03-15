import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			bacon:1,
			meat: 1,
			chasse:1 
		}
	}

	componentDidMount(){
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let i of query.entries()){
			ingredients[i[0]] = +i[1];
		}
		this.setState({ingredients: ingredients});
	}

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	}
	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render () {

		return (
				<div>
				<Route path="/checkout" exact>
					<CheckoutSummary
						ingredients={this.state.ingredients}
						checkoutCancelled={this.checkoutCancelledHandler}
						checkoutContinued={this.checkoutContinuedHandler} />
				</Route>
				<Route path="/checkout/contact-data">
					<ContactData />
				</Route>
				</div>
			);
	}
}

export default Checkout;