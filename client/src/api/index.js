import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000',
	// baseURL: 'https://server-p2.fauzandp.online',
});

export default api;
