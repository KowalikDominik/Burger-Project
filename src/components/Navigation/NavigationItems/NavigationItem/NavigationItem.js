import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const clicks = () => {
	const divs = document.body.getElementsByTagName('div');
	for ( let div in divs ) {
		const testedDiv = divs[div].className;
		if ( testedDiv && testedDiv.includes('DrawerToggle')) {
			divs[div].click();
		}
	}
};

const navigationItem = (props) => {
	return(
		<li className={classes.NavigationItem}>
			<NavLink
				onClick={clicks}
				exact={props.exact}
				to={props.link}
				activeClassName={classes.active}
				isActive={props.extraActive}>
				{props.children}
			</NavLink>
		</li>)
};

export default navigationItem;