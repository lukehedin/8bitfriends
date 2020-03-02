import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Util from '../../../../Util';
import './DiscoverPanelResults.css';

import defaultAvatar from './default_avatar.png';

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
				.map(edge => {
					let user = edge.node;
					return <Link key={user.login} to={Util.route.user(user.login)} className="result">
						<img className="user-avatar" src={user.avatarUrl || defaultAvatar} />
						<div className="user-details">
							<p><b>{user.login}</b></p>
							<p>{user.name}</p>
							<p>{user.repositories.totalCount} repositor{user.repositories.length === 1 ? 'y' : 'ies'}</p>
						</div>
					</Link>;
				})
			: <p className="empty-text">No results to display</p>
		}
	</div>;
}

export default DiscoverPanelResults;