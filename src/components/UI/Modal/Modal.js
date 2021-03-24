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

	clickOnBackdrop = () => {
		const divs = document.body.getElementsByTagName('div');
		for ( let div in divs ) {
			const testedDiv = divs[div].className;
			if ( testedDiv && testedDiv.includes('Backdrop')) {
				divs[div].click();
			}
		}
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

		if ( this.props.fast && this.props.show ) {
			const timer = setTimeout(() => {
				this.clickOnBackdrop();
				clearTimeout(timer);
			}, 3000);
		}

		let messageTitleContent = '';
		if (this.props.type === 'Danger') {
		 	messageTitleContent = 'Something went wrong!'
		} else {
			messageTitleContent = 'Success!';
		}		

		const messageTitle = <div className={classes.Title}>{messageTitleContent}</div>


		return(
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.close}/>
				<div
					className={[classes.Modal, classes[this.props.type]].join(' ')}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}>
					{ this.props.type ? messageTitle : null }
					<div className={classes.Content} >
						{this.props.children}
					</div>
				</div>
			</Aux>
		)
	
	}
}

export default Modal;