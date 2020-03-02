// Link.react.test.js
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks';
import Util from '../Util';
Enzyme.configure({ adapter: new Adapter() });

import DiscoverPanel from '../components/UI/DiscoverPanel/DiscoverPanel';

describe('DiscoverPanel', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<ApolloProvider client={Util.apollo.getClient()}>
			<MemoryRouter>
				<DiscoverPanel />
			</MemoryRouter>
		</ApolloProvider>)
	});

	it('renders', () => {
		expect(wrapper).not.toBeNull();
	});

	it('correctly shows result', () => {
		wrapper.find('input').simulate('change', {target: {value: 'lukehedin'}});
		setTimeout(() => {
			expect(wrapper.find('.user-name').text().toEqual('Luke Hedin'));
		}, Util.apollo.TEST_FETCH_TIME);
	});
})