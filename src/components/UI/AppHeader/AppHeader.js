import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Util from '../../../Util';
import './AppHeader.css';

import logo from '../../../logo.png';

export default class AppHeader extends Component {
	render() {
		return <header className="app-header">
    		<div className="app-header-inner">
				<Link to={Util.route.discover()}><img className="app-logo" src={logo} alt="8BitFriends"></img></Link>
				<div className="user-info">
					<p>Hi, username!</p>
					<Link to={Util.route.login()}>Log out</Link>
				</div>
			</div>
        </header>;
	}
}