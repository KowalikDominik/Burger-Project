import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';

class Message extends Component  {
	state = {
		messageShow: false,
		messageContent: null
	}
	componentWillMount () {
		if (this.props.path === '?orderSuccess') {
			this.setState({
				messageShow: true,
				messageContent: 'Order Success !'});
		}
	}
	modalHiddenHandler = () => {
		this.setState({messageShow: false});
	}
	render() {
		return(
			<Modal show={this.state.messageShow} close={this.modalHiddenHandler}>
				{this.state.messageContent}
			</Modal>
		)	
	}
	
}

export default Message;