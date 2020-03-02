import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './DiscoverPanelResults.css';

import DiscoverPanelResult from './DiscoverPanelResult/DiscoverPanelResult';

const SEARCH_USERS = gql`
	query searchUsers($searchValue: String!){
		search(query: $searchValue, type: USER, first: 20) {
			edges {
				node {
					__typename
					...on User {
						login,
						name,
						avatarUrl,
						repositories {
							__typename,
							totalCount
						}
					}
				}
			}
		}
	}
`;

function DiscoverPanelResults(props) {
	const { loading, error, data } = useQuery(SEARCH_USERS, {
		variables: {
			searchValue: `${props.searchValue} type:user`
		}
	});
  
	if (loading) return <p>Fetching friends matching "{props.searchValue}"...</p>;
	if (error) return <p>Error :(</p>;
  
	return <div className="discover-panel-results">
		{data && data.search && data.search.edges && data.search.edges.length > 0
			? data.search.edges
				.map((edge, idx) => <DiscoverPanelResult key={idx} user={edge.node} />)
			: <p className="empty-text">No results to display</p>
		}
	</div>;
}

export default DiscoverPanelResults;