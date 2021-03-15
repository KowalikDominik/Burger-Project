import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: '',
			city: ''
		},
		phone: ''
	}

	render(){
		return(
			<div>
			<h4>Enter your contact data</h4>
				<form action="">
					<input type="text" name="name" placeholder="Your name" />
					<input type="email" name="email" placeholder="Your e-mail" />
					<input type="text" name="name" placeholder="Street name" />
					<input type="text" name="name" pattern="[0-9]{5}" placeholder="Postal code" />
					<input type="text" name="name" placeholder="City name" />
					<input type="tel" name="name"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Your phone number" />
					<Button btnType="Success">ORDER</Button>
				</form>
			</div>
			)
	}
}

export default ContactData;