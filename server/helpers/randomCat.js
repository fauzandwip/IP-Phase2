const axios = require('axios');

const options = {
	method: 'GET',
	url: 'https://cat14.p.rapidapi.com/v1/images/search',
	headers: {
		'x-api-key': process.env.X_API_KEY_RAPIDAPI,
		'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
		'X-RapidAPI-Host': process.env.X_RAPID_API_HOST,
	},
};

const getImageUrl = async () => {
	try {
		const response = await axios.request(options);
		return response.data[0].url;
	} catch (error) {
		console.error(error);
	}
};

module.exports = getImageUrl;
