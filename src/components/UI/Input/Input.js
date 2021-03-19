import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
	let inputElement = null;
console.log('input: '+props.elementType);
	switch (props.elementType){
		case ( 'input' ):
			inputElement = <input
				className={classes.InputElement}
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed}/>;
			break;
		case ( 'select' ):
			inputElement = <select>
				{props.elementConfig.options.map(option => (
					<option
						key={option.value}
						value={option.value}
						onChange={props.changed}>
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
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
		</div>
		)
}

export default input;