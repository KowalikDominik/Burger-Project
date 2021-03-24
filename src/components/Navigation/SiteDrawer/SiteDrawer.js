import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SiteDrawer.module.css';
import Aux from'../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const siteDrawer = (props) => {

	let attechedClasses = [classes.SiteDrawer, classes.Close];
	if (props.open) attechedClasses = [classes.SiteDrawer, classes.Open];

	return(
		<Aux>
			<Backdrop show={props.open} clicked={props.closed}/>
			<div className={attechedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
		);
}

export default siteDrawer;