import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SiteDrawer from '../Navigation/SiteDrawer/SiteDrawer';

class Layout extends Component {
	state = {
		siteDrawerShow : false
	};

	setSiteDrawerClose = () => {
		this.setState({siteDrawerShow: false})
	};

	setSiteDrawerOpen = () => {
		this.setState({siteDrawerShow: true})
	};

	siteDrawerToggle = () => {
		this.setState((prevState) => {
			return {siteDrawerShow: !prevState.siteDrawerShow}
			}
		)
	}
	

	render() {
		return(
			<Aux>
				<Toolbar
					drawerToggleClicked={this.siteDrawerToggle}
					clickedIcon={this.state.siteDrawerShow}/>
				<SiteDrawer
					open={this.state.siteDrawerShow}
					closed={this.setSiteDrawerClose} />
				<main className={classes.Content}>
					{this.props.children}
				</main>	
			</Aux>

		)
	}
	
	
}

export default Layout;