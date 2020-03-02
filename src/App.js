import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		'Authorization': `Bearer ${localStorage.getItem('GITHUB_API_KEY')}`
	}
});

function App() {
  return (
  	<ApolloProvider client={client}>
		<div>
			<h2>My first Apollo app 🚀</h2>
		</div>
	</ApolloProvider>
  );
}

export default App;
