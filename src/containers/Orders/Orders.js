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
				let count = 0;
				for (let key in response.data) {
					count++;
					fetchedArray.push({
						...response.data[key],
						id: key,
						orderNo: count 
					});
				}

        fetchedArray.sort(function (a, b) {
  			  if (a.orderNo < b.orderNo)
       			return 1;
    			else if (a.orderNo > b.orderNo)
        		return -1;
    			else
        		return 0;
				});

				this.setState({loading: false, orders: fetchedArray});
			})
			.catch(error => this.setState({loading: false}))
	}

	render() {
		let orders = <Spinner />
		if ( !this.state.loading ) {
			orders = this.state.orders.map(order => (
					<Order key={order.id} orderNo={order.orderNo} ingredients={order.ingredients} price={order.price} />
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