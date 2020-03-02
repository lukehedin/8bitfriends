// Link.react.test.js
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ApolloProvider } from '@apollo/react-hooks';
import Util from '../Util';
Enzyme.configure({ adapter: new Adapter() });

import UserInfoPanel from '../components/UI/UserInfoPanel/UserInfoPanel';

describe('UserInfoPanel', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<ApolloProvider client={Util.apollo.getClient()}>
			<UserInfoPanel userLogin="lukehedin" />
		</ApolloProvider>)
	});

	it('renders', () => {
		expect(wrapper).not.toBeNull();
	});

	it('correctly shows result', () => {
		setTimeout(() => {
			expect(wrapper.find('.user-name').text().toEqual('Luke Hedin'));
		}, Util.apollo.TEST_FETCH_TIME);
	});
})