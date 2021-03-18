import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { withRouter } from "react-router";
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: '',
			city: ''
		},
		phone: '',
		loading: false,
		purchasing: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			customer: {
				name: 'Dominik Kowalik',
				address: {
					street: 'wileńska 10',
					postalCode: '20-603',
					city: 'Poland'
				},
				phone: '654876123',
				email: 'gmko@gm.pl'
			}
		}

		axios.post('orders.json',order)
			.then((response) => {
				this.setState({ loading: false});
				this.props.history.push({
					pathname: '/',
					search: '?orderSuccess'
				});
				
			})
			.catch(error => this.setState({ loading: false}));

	}

	render(){
		let contactForm = (
		<Aux>
			<h4>Enter your contact data</h4>
			<Button btnType="Danger">Autofill for testing</Button>	
			<form>
				<Input inputtype="input" label="Your Name:" type="text" name="name" placeholder="Your name" />
				<Input inputtype="input" label="E-mail:" type="email" name="email" placeholder="Your e-mail" />
				<Input inputtype="input" label="Street:" type="text" name="street" placeholder="Street name" />
				<Input inputtype="input" label="Zip-code:" type="text" name="postalCode" pattern="[0-9]{5}" placeholder="Postal code" />
				<Input inputtype="input" label="City:" type="text" name="city" placeholder="City name" />
				<Input inputtype="input" label="Phone number" type="tel" name="phone"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Your phone number" />
				<Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
			</form>
		</Aux>);

		if(this.state.loading) {
			contactForm = <Spinner />;
		}

		return(
			<div className={classes.ContactData}>
				{contactForm}		
			</div>
			)
	}
}

export default withRouter(ContactData);