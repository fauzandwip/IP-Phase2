import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
	return (
		<GoogleOAuthProvider
			clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}
		>
			<RouterProvider router={router} />
		</GoogleOAuthProvider>
	);
}

export default App;
