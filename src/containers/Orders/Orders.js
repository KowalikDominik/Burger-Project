import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	}

	componentDidMount() {
		axios.get('orders.json')
			.then(response => {
				const fetchedArray = [];
				for (let key in response.data) {
					fetchedArray.push({
						...response.data[key],
						id: key 
					});
				}
				this.setState({loading: false, orders: fetchedArray});
				console.log(response.data);
			})
			.catch(error => this.setState({loading: false}))
	}

	render() {
		let orders = <Spinner />
		if ( !this.state.loading ) {
			orders = this.state.orders.map(order => (
					<Order key={order.id} ingredients={order.ingredients} price={order.price} />
					));
		}
		return(
			<div>
				{ orders }
			</div>
			)
	}
}

export default withErrorHandler(Orders, axios);