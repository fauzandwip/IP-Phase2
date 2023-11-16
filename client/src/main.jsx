import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CustomToast from './components/CustomToast.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthContextProvider>
		<React.StrictMode>
			<App />
			<CustomToast />
		</React.StrictMode>
	</AuthContextProvider>
);
