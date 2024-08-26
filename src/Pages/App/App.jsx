// Dependencias
import { HashRouter, Navigate, useRoutes } from 'react-router-dom'

// CSS
import './App.css';

// Proveedor de contexto
import { AppProvider } from '../../Context';

// Pantallas
import { Home } from '../Screens/Home';


// Rutas
const AppRoutes = () => {
  let routes = useRoutes([
		{path: "/home", element: <Home/>},

		{path: "/*", element: <Navigate replace to={"/home"}/>},
  ]);
  
  return routes;
}


/**
 * Aplicacion
 *
 * @returns {JSX}
 */
const App = () => {
  	return(
		<AppProvider>
			<HashRouter>
				<AppRoutes/>
			</HashRouter>
		</AppProvider>
  	);
}


export default App;

