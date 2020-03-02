import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './UserInfoPanel.css';

const GET_USER = gql`
	query getUser($userLogin: String!){
		user(login: $userLogin) {
			login,
			name,
			avatarUrl,
			location
		}
	}
`;

function UserInfoPanel(props) {
	const { loading, error, data } = useQuery(GET_USER, { 
		variables: {
			userLogin: props.userLogin
		}
	});
	
	if (loading) return <p className="loader">Loading...</p>;
	if (error) return <p className="error">Error :(</p>;
  
	return <div className="user-info-panel">
		<h3>{data.user.login}</h3>
		{data.user.avatarUrl ? <img className="user-avatar" src={data.user.avatarUrl} /> : null}
		<p>{data.user.name}</p>
		<p>{data.user.location}</p>
	</div>;
}

export default UserInfoPanel;