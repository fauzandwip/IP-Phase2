import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>HOME PAGE</div>,
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
