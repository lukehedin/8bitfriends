import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Util from './Util';
import './App.css';

import AppHeader from './components/UI/AppHeader/AppHeader';
import LoginPage from './components/pages/LoginPage';
import DiscoverPage from './components/pages/DiscoverPage';
import UserPage from './components/pages/UserPage';

function App() {
  return (
	<Router>
		<ApolloProvider client={Util.apollo.getClient()}>
   		   <div className="app">
				<AppHeader />
				<div className="app-body">
					<Switch>
						<Route exact path="/" render={() => <Redirect to={Util.route.login()} />} />

						<Route exact path="/login" render={() => <LoginPage />} />
						<Route exact path="/discover" render={() => <DiscoverPage />} />
						<Route exact path="/user/:userLogin" render={({ match }) => <UserPage userLogin={match.params.userLogin} />} />
					</Switch>
				</div>
			</div>
		</ApolloProvider>
	</Router>
  );
}

export default App;
