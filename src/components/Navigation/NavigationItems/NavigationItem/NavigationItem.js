import React from 'react';
import classes from './NavigationItem.module.css';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';


const isActiveHome = (props) => {
	console.log(props);
		let navElement = (
			<NavLink
				exact={props.exact}
				to={props.link}
				activeClassName={classes.active}>
				{props.children}
			</NavLink>
		);

		let clonedNavLinkWithMoreProps = null;

		if (props.location.pathname === '/checkout') {
			console.log(props.location.pathname);
			let clonedNavLinkWithMoreProps = React.cloneElement(
	    navElement, 
	    { isActive: () => true});
	    console.log('jestem w elem');
	    return clonedNavLinkWithMoreProps;
	  } else {
	  	return navElement;
	  } 
}

const navigationItem = (props) => {
	console.log();
	return(
		<li className={classes.NavigationItem}>
			<NavLink
				exact={props.exact}
				to={props.link}
				activeClassName={classes.active}
				isActive={props.extraActive}>
				{props.children}
			</NavLink>
		</li>)
}

export default withRouter(navigationItem);