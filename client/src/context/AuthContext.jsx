import { createContext, useEffect, useState } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../../firebase';
import PropTypes from 'prop-types';
import api from '../api';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	console.log(currentUser, 'auth');

	// useEffect(() => {
	// 	const unsub = onAuthStateChanged(auth, (user) => {
	// 		setCurrentUser(user);
	// 		console.log(user);
	// 		console.log(user.username);
	// 	});
	// 	return () => {
	// 		unsub();
	// 	};
	// }, []);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const { data } = await api.get('/profile', {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				});
				setCurrentUser((prev) => {
					return {
						...prev,
						...data,
					};
				});
			} catch (error) {
				console.log(error);
			}
		};
		fetchProfile();
	}, []);

	// console.log('currentUser', currentUser);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.any,
};
