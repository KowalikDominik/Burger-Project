import React from 'react';
import burgerLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const logo = () => (
	<NavLink to="/">
		<div className={classes.Logo}>
			<img src={burgerLogo} alt="" />
		</div>	
	</NavLink>
)

export default logo;