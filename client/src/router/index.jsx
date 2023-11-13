import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import RootLayout from '../layouts/RootLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'login',
				element: <div>LOGIN</div>,
			},
		],
	},
]);

export default router;
