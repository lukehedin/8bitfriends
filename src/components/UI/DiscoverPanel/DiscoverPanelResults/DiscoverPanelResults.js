import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Util from '../../../../Util';
import './DiscoverPanelResults.css';

const SEARCH_USERS = gql`
	query searchUsers($searchValue: String!){
		search(query: $searchValue, type: USER, first: 20) {
			edges {
				node {
					__typename
					...on User {
						login
					}
				}
			}
		}
	}
`;

function DiscoverPanelResults(props) {
	const { loading, error, data } = useQuery(SEARCH_USERS, {
		variables: {
			searchValue: props.searchValue
		}
	});
  
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
  
	return <div className="discover-panel-results">
		{data && data.search && data.search.edges && data.search.edges.length > 0
			? data.search.edges
				.filter(edge => edge.node && edge.node.__typename === 'User')
				.map(edge => {
					let user = edge.node;
					return <Link key={user.login} to={Util.route.user(user.login)} className="result">{user.login}</Link>;
				})
			: <p className="empty-text">No results to display</p>
		}
	</div>;
}

export default DiscoverPanelResults;