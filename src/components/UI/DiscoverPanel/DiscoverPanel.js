import React, { useState, useEffect } from 'react';
import './DiscoverPanel.css';

import DiscoverPanelResults from './DiscoverPanelResults/DiscoverPanelResults';

let searchTimeout;

function DiscoverPanel() {
	const [searchValue, setSearchValue] = useState('');
	const [activeSearchValue, setActiveSearchValue] = useState('');

	useEffect(() => {
		//Slight delay to prevent request every value change
		if(searchTimeout) clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => setActiveSearchValue(searchValue), 500);
	});

	return <div className="discover-panel">
		<input className="user-search-field" autoFocus={true} placeholder="Search by username" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
		{activeSearchValue
			? <DiscoverPanelResults searchValue={activeSearchValue} />
			: <p className="empty-text">Enter a username to search.</p>}
	</div>;
}

export default DiscoverPanel;