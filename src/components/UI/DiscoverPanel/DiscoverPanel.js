import React, { useState } from 'react';
import './DiscoverPanel.css';

import DiscoverPanelResults from './DiscoverPanelResults/DiscoverPanelResults';

function DiscoverPanel() {
	const [searchValue, setSearchValue] = useState('');


	return <div className="discover-panel">
		<input className="user-search-field" autoFocus={true} placeholder="Search by username" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
		{searchValue
			? <DiscoverPanelResults searchValue={searchValue} />
			: <p className="empty-text">Enter a username to search.</p>}
	</div>;
}

export default DiscoverPanel;