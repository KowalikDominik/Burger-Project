import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary'

class Modal extends Component {

state = {
	modalshow: true
}

shouldComponentUpdate(nextProps, nextState) {
	return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
}


	render(){

		let ourContent = (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.close}/>
				<div
					className={[classes.Modal, classes[this.props.type]].join(' ')}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
				}}>
					{this.props.children}
				</div>
			</Aux>
			);
		console.log(this.state.modalshow);
		if ( !this.state.modalshow ) {
			ourContent = '';
		}

		const body = document.body;
		if ( this.props.show ) {
			setTimeout(() => {
	    	 this.setState({modalshow: false});
	  	}, 1000);			
  		body.style.height = '100vh';
  		body.style.overflowY = 'hidden';
		} else {
			body.style.top = '';
	  	body.style.height = '';
	  	body.style.overflowY = '';
		}

		return(
			<div>
			{ourContent}
			</div>)	
	}
	
	
}

export default Modal;