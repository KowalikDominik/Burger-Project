import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { withRouter } from "react-router";

const navigationItems = (props) => {
	
	let activeLink = false;
	const path = props.location.pathname
	if ( (path === '/checkout')
		|| (path === '/')
		|| (path === '/checkout/contact-data')) {
		activeLink = true;
	}
	return(
		<ul className={classes.NavigationItems}>
			<NavigationItem link="/" exact extraActive={() => (activeLink)}>Burger Builder</NavigationItem>
			<NavigationItem link="/orders" exact>Orders</NavigationItem>
			<NavigationItem link="/contact" exact>Contact</NavigationItem>
		</ul>
	)
}

export default withRouter(navigationItems);