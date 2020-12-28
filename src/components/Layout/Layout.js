import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SiteDrawer from '../Navigation/SiteDrawer/SiteDrawer';

const Layout = ( props ) => (
	<Aux>
		<Toolbar />
		<SiteDrawer />
		<main className={classes.Content}>
			{props.children}
		</main>	
	</Aux>
	
);

export default Layout;