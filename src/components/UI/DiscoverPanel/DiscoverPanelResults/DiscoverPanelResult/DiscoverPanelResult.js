import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Util from '../../../../../Util';
import './DiscoverPanelResult.css';

export default class DiscoverPanelResult extends Component {
	render() {
		let user = this.props.user;

		return <Link key={user.login} to={Util.route.user(user.login)} className="discover-panel-result">
			<img alt="User avatar" className="user-avatar" src={user.avatarUrl} />
			<div className="user-details">
				<p><b>{user.login}</b></p>
				<p className="user-name">{user.name}</p>
				<p>{user.repositories.totalCount} repositor{user.repositories.length === 1 ? 'y' : 'ies'}</p>
			</div>
		</Link>
	}
}