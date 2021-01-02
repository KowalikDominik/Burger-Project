import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {

const classesToggle = props.clickedIcon ? classes.Active : null;

	return(
		<div
			onClick={props.clicked}
			className={[classes.DrawerToggle, classesToggle].join(' ')}>
			<div></div>
		</div>
	)
}

export default drawerToggle;