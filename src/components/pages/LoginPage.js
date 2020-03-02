import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Util from '../../Util';

export default class LoginPage extends Component {
	render() {
		return <div className="page-login">
			<h1>Login</h1>
			<p><Link to={Util.route.discover()}>Sign in</Link></p>
			<p><Link to={Util.route.discover()}>Sign up</Link></p>
		</div>
	}
}