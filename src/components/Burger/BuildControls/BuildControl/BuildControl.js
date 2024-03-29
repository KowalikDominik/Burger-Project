import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => {
	return(
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{props.label}</div>
			<div className={classes.ButtonContainer}>
				<button
					className={classes.Less}
					onClick={props.removed}
					disabled={props.disabled}>-</button>
				<div
					className={classes.CountLabel}>{props.count}</div>
				<button
					className={classes.More}
					onClick={props.added}>+</button>
			</div>
		</div>
	)
}

export default buildControl;