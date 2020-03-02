import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Util from '../../Util';

import logo from '../../logo.png';

export default class LoginPage extends Component {
	render() {
		return <div className="page-login">
			<img className="app-logo" src={logo} alt="8BitFriends"></img>
			<p><Link to={Util.route.discover()}>Sign in</Link></p>
			<p><Link to={Util.route.discover()}>Sign up</Link></p>
		</div>
	}
}