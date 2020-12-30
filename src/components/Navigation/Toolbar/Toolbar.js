import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SiteDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
		<header className={classes.Toolbar}>
			<DrawerToggle clicked={props.drawerToggleClicked} clickedIcon={props.clickedIcon} />
			<Logo className={classes.Logo}/>
			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
		)

export default toolbar;