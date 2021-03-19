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
			orderForm: {
				name: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Your name',
					},
					value: ''
				},
				email: {
					elementType: 'input',
					elementConfig: {
						type: 'email',
						placeholder: 'Your e-mail',
					},
					value: ''
				},
				street: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Street',
					},
					value: ''
				},
				postalCode: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Postal Code',
					},
					value: ''
				},
				city: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'City',
					},
					value: ''
				},
				tel: {
					elementType: 'input',
					elementConfig: {
						type: 'tel',
						placeholder: 'Phone number',
					},
					value: ''
				},
				deliveryMethod: {
					elementType: 'select',
					elementConfig: {
						options: [
						{value: 'poczta', displayValue: 'Poczta Polska'},
						{value: 'kurier', displayValue: 'Kurier'}],
						placeholder: 'Delivey Mathod'
					},
					value: ''
				}
			}
		}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		
		const formData = {};
		for (let imputElement in this.state.orderForm) {
			formData[imputElement] = this.state.orderForm[imputElement].value;
		}

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			orderData: formData
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

	inputChangedHandler = (event, elementId) => {
		const updatedForm = {
			...this.state.orderForm
		};
		const updatedElement = {
			...updatedForm[elementId]
		};
		updatedElement.value = event.target.value;
		updatedForm[elementId] = updatedElement;
		this.setState({orderForm: updatedForm});
		console.log(this.state.orderForm);
	}

	render(){
		const formElements = [];
		for (let element in this.state.orderForm) {
			formElements.push({
				id: element,
				type: this.state.orderForm[element].elementType,
				config: this.state.orderForm[element]
			});
		}
		const allFormElements = formElements.map(element => (
			<Input
				key={element.id}
				elementType={element.type}
				elementConfig={ element.config.elementConfig }
				value={element.config.value}
				changed={(event) => this.inputChangedHandler(event, element.id)}/>
			));
		let orderFormDisplay = (
			<Aux>
				<h4>Enter your contact data</h4>
				<Button btnType="Danger">Autofill for testing</Button>	
				<form>
					{allFormElements}
					
					<Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
				</form>
			</Aux>);

		if(this.state.loading) {
			orderFormDisplay = <Spinner />;
		}

		return(
			<div className={classes.ContactData}>
				{orderFormDisplay}		
			</div>
			)
	}
}

export default withRouter(ContactData);