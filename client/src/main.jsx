import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CustomToast from './components/CustomToast.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<CustomToast />
	</React.StrictMode>
);
