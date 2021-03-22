import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary'

class Modal extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
}
	
	componentWillUnmount() {
		const body = document.body;
		body.style.top = '';
		body.style.height = '';
		body.style.overflowY = '';
	}

	render(){
		
		const body = document.body;
		if ( this.props.show  ) {		
			body.style.height = '100vh';
			body.style.overflowY = 'hidden';
		} else {
			body.style.top = '';
  		body.style.height = '';
  		body.style.overflowY = '';
		}

		return(
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
		)
	
	}
}

export default Modal;