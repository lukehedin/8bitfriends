import React, { Component } from 'react';
import UserInfoPanel from '../UI/UserInfoPanel/UserInfoPanel';

export default class UserPage extends Component {
	render() {
		return <div className="page-user">
			<h1>User</h1>
			<UserInfoPanel userLogin={this.props.userLogin} />
		</div>
	}
}