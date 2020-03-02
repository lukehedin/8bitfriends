import ApolloClient from 'apollo-boost';

// Util contains common functions which will be used throughout the frontend
const Util = {
	apollo: {
		TEST_FETCH_TIME: 5000,
		
		getClient() {
			return new ApolloClient({
				uri: 'https://api.github.com/graphql',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('GITHUB_API_KEY')}`
				}
			});
		}
	},

	route: {
		login: () => `/login`,
		discover: () => `/discover`,
		user: (userLogin) => `/user/${userLogin}`
	}
}

export default Util;