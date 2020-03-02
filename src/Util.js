// Util contains common functions which will be used throughout the frontend
const Util = {
	api: {
		_fetch: (method, endpoint, params) => {
			return new Promise((resolve, reject) => {
				fetch(`${endpoint}`, {
					headers : { 
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					},
					method: method,
					body: params ? JSON.stringify(params) : null
				})
				.then(response => {
					response.json().then(data =>  resolve(data));
				})
				.catch(err => {
					console.log(err);
					if(err.response && err.response.status === 401) {
						reject(err);
					}
				});
			});
		},

		get: (endpoint) => {
			return Util.api._fetch('GET', endpoint);
		},

		post: (endpoint, params) => {
			return Util.api._fetch('POST', endpoint, params);
		}
	},

	route: {
		login: () => `/login`,
		discover: () => `/discover`,
		user: (userLogin) => `/user/${userLogin}`
	}
}

export default Util;