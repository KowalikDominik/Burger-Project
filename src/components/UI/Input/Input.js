import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
	let inputElement = null;
	let inputClasses = [classes.InputElement];
	let errorMesage = null;

	if (props.invalidMessage && props.shouldValid && props.touched) {
		inputClasses.push(classes.Invalid);
	}

	switch (props.elementType){
		case ( 'input' ):
			inputElement = <input
				className={inputClasses.join(' ')}
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed}/>;
			break;
		case ( 'select' ):
			inputElement = <select
				className={classes.InputElement}
				onChange={props.changed}>
				{props.elementConfig.options.map(option => (
					<option
						key={option.value}
						value={option.value}>
						{option.displayValue}</option>
				))}
				</select>;
			break;
		default:
			inputElement = <input
				className={classes.InputElement}
				{...props.elementConfig} 
				onChange={props.changed}/>;
	}

	return(
		<div className={classes.Input}>
			<label className={classes.Label}>
				{props.elementConfig.placeholder}:
			</label>
			{inputElement}
			<p className={classes.Error}>{props.invalidMessage} </p>
		</div>
		)
}

export default input;