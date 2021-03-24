import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { withRouter } from "react-router";
import Input from '../../../components/UI/Input/Input';
import Modal from '../../../components/UI/Modal/Modal';

class ContactData extends Component {
	state = {
			orderForm: {
				name: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Your name',
					},
					value: '',
					validation: {
						required: true,
						minLength: 3
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				email: {
					elementType: 'input',
					elementConfig: {
						type: 'email',
						placeholder: 'Your e-mail',
					},
					value: '',
					validation: {
						required: true
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				street: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Street',
					},
					value: '',
					validation: {
						required: true,
						minLength: 3
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				postalCode: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Postal Code',
					},
					value: '',
					validation: {
						required: true,
						minLength: 4,
						maxLength: 5
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				city: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'City',
					},
					value: '',
					validation: {
						required: true
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				tel: {
					elementType: 'input',
					elementConfig: {
						type: 'tel',
						placeholder: 'Phone number',
					},
					value: '',
					validation: {
						required: true,
						minLength: 8
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				deliveryMethod: {
					elementType: 'select',
					elementConfig: {
						options: [
						{value: 'poczta', displayValue: 'Poczta Polska'},
						{value: 'kurier', displayValue: 'Kurier'}],
						placeholder: 'Delivey Mathod'
					},
					value: 'poczta',
					validation: {},
					valid: true
				}
			},
			formIsValid: false,
			showErrorMessage: false
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

	checkValidity = (value, rules) => {
		let invalidError = '';

		if (rules.required && value.trim() === '') {
			invalidError = 'This field is required!';
		}
		else if (rules.minLength && value.length < rules.minLength ) {
			invalidError = 'Enter more characters.';
		}
		else if (rules.maxLength && value.length >= rules.maxLength ) {
			invalidError = 'Too many characters.';
		}
		return invalidError;
	}

	inputChangedHandler = (event, elementId) => {
		const updatedForm = {
			...this.state.orderForm
		};
		const updatedElement = {
			...updatedForm[elementId]
		};
		updatedElement.value = event.target.value;
		updatedElement.touched = true;
		updatedElement.invalidMsg = this.checkValidity(updatedElement.value, updatedElement.validation);
		updatedElement.valid = updatedElement.invalidMsg === '';
		updatedForm[elementId] = updatedElement;
		
		let formIsValid = true;
		for ( let formElement in updatedForm ) {
			formIsValid = updatedForm[formElement].valid && formIsValid;
		}

		this.setState({
			orderForm: updatedForm,
			formIsValid: formIsValid});

	}

	checkAfterSubmitHandler = (event) => {
		if ( !this.state.formIsValid ) {
			event.preventDefault();
			this.setState({showErrorMessage: true});
			let timer = null;
			timer = setTimeout(() => {
				clearTimeout(timer);
				this.setState({showErrorMessage: false});
			},3000);
		}
	}

	closedErrorMessage = () => {
		this.setState({showErrorMessage: false})
	}

	autoFillMethod = () => {
		this.setState({
			orderForm: {
				name: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Your name',
					},
					value: 'Json Burger',
					validation: {
						required: true,
						minLength: 3
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				email: {
					elementType: 'input',
					elementConfig: {
						type: 'email',
						placeholder: 'Your e-mail',
					},
					value: 'spam@confirmed.eu',
					validation: {
						required: true
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				street: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Street',
					},
					value: 'Components street 16',
					validation: {
						required: true,
						minLength: 3
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				postalCode: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'Postal Code',
					},
					value: '12430',
					validation: {
						required: true,
						minLength: 4,
						maxLength: 5
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				city: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'City',
					},
					value: 'React',
					validation: {
						required: true
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				tel: {
					elementType: 'input',
					elementConfig: {
						type: 'tel',
						placeholder: 'Phone number',
					},
					value: '543121768',
					validation: {
						required: true,
						minLength: 8
					},
					valid: false,
					touched: false,
					invalidMsg: ''
				},
				deliveryMethod: {
					elementType: 'select',
					elementConfig: {
						options: [
						{value: 'poczta', displayValue: 'Poczta Polska'},
						{value: 'kurier', displayValue: 'Kurier'}],
						placeholder: 'Delivey Mathod'
					},
					value: '',
					valid: true
				}
		},
		formIsValid: true
		});
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
				invalid={!element.config.valid}
				shouldValid={element.config.validation}
				touched={element.config.touched}
				invalidMessage={element.config.invalidMsg}
				changed={(event) => this.inputChangedHandler(event, element.id)}/>
			));

		let orderFormDisplay = (
			<Aux>
			<Modal
					type="Danger"
					show={this.state.showErrorMessage}
					close={this.closedErrorMessage} >
					Form is not valid. Please enter correct data.
			</Modal>
			<h4>Enter your contact data</h4>
				<Button
					btnType="Danger"
					clicked={this.autoFillMethod}>
					Autofill for testing
				</Button>	
				<form onSubmit={this.orderHandler}>
					{allFormElements}				
					<Button
						btnType={!this.state.formIsValid ? "IsDisabled" : "Success"}
						clicked={this.checkAfterSubmitHandler}>
						ORDER
					</Button>
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