import React from 'react';
import classes from './NavigationItem.module.css';
import {BrowserRouter as Link} from 'react-router-dom';

const navigationItem = (props) => (
	<li className={classes.NavigationItem}>
		<Link to={props.link}>
			<a
				href=""
				className={props.active ? classes.active : null}>
				{props.children}
			</a>
		</Link>
	</li>
)

export default navigationItem;