import { createBrowserRouter, redirect } from 'react-router-dom';
import Register from '../pages/Register';
import RootLayout from '../layouts/RootLayout';
import Login from '../pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		loader: () =>
			localStorage.getItem('access_token') ? null : redirect('/login'),
		children: [],
	},
	{
		path: 'register',
		element: <Register />,
	},
	{
		path: 'login',
		element: <Login />,
	},
]);

export default router;
