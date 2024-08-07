import React from 'react'
import { HashRouter, Navigate, useLocation, useRoutes } from 'react-router-dom'

import './App.css';

import { AppProvider } from '../../Context';
import { Home } from '../Screens/Home';

const AppRoutes = () => {

  let routes = useRoutes([
		{path: "/home", element: <Home/>},

		{path: "/*", element: <Navigate replace to={"/home"}/>},
  ]);
  
  return routes;
}

const App = () => {
  	return (
		<AppProvider>
			<HashRouter>
				<AppRoutes/>
			</HashRouter>
		</AppProvider>
  	);
}

export default App;

