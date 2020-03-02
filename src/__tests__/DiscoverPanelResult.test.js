// Link.react.test.js
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() });

import DiscoverPanelResult from '../components/UI/DiscoverPanel/DiscoverPanelResults/DiscoverPanelResult/DiscoverPanelResult';

describe('DiscoverPanelResult', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<MemoryRouter>
			<DiscoverPanelResult user={{
				login: 'testlogin',
				name: 'Test McTestington',
				avatarUrl: 'https://avatars1.githubusercontent.com/u/18107237?s=460&v=4',
				repositories: {
					totalCount: 29
				}
			}} />
		</MemoryRouter>)
	});

	it('renders', () => {
		expect(wrapper).not.toBeNull();
	});
})