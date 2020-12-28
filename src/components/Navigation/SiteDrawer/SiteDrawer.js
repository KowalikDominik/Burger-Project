import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SiteDrawer.module.css';
import Aux from'../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const siteDrawer = (props) => {

	return(
		<Aux>
			<Backdrop show={props.show}/>
			<div className={classes.SiteDrawer}>
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