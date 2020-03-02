// Link.react.test.js
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks';
import Util from '../Util';
Enzyme.configure({ adapter: new Adapter() });

import DiscoverPanelResults from '../components/UI/DiscoverPanel/DiscoverPanelResults/DiscoverPanelResults';

describe('DiscoverPanelResults', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<ApolloProvider client={Util.apollo.getClient()}>
			<MemoryRouter>
				<DiscoverPanelResults searchValue={""} />
			</MemoryRouter>
		</ApolloProvider>)
	});

	it('renders', () => {
		expect(wrapper).not.toBeNull();
	});
})