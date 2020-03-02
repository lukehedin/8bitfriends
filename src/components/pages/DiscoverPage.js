import React, { Component } from 'react';

import DiscoverPanel from '../UI/DiscoverPanel/DiscoverPanel';

export default class DiscoverPage extends Component {
	render() {
		return <div className="page-discover">
			<h1>Discover</h1>
			<DiscoverPanel />
		</div>
	}
}