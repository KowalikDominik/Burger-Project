import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';

class Message extends Component  {



	render() {
		return(
			<Modal
				show={this.props.show}
				close={this.props.close}
				type={this.props.type}>
			{this.props.content}
			</Modal>
		)	
	}
	
}

export default Message;