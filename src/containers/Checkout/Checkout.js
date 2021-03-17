import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
	state = {
		ingredients: null,
		totalPrice: 0
	}

	componentWillMount(){
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let totalPrice = 0;
		for (let i of query.entries()){
			if(i[0] === 'totalPrice'){
				totalPrice = i[1];
			} else {
				ingredients[i[0]] = +i[1];				
			}

		}
		this.setState({ingredients: ingredients, totalPrice: totalPrice});
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
				<Route path={this.props.match.path + "/contact-data"}>
					<ContactData
						ingredients={this.state.ingredients}
						totalPrice={this.state.totalPrice}/>
				</Route>
				</div>
			);
	}
}

export default Checkout;