'use strict';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middlewares');

const app = express();

// app.use(cors());
app.use((req, res, next) => {
	res.header(
		'Access-Control-Allow-Origin',
		'https://iproject-p2-93bd0.web.app'
	);
	// res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Headers', 'Content-Type, google_token');
	next();
});
app.use(express.json());
app.use(require('./routes'));

app.use(errorHandler);

module.exports = app;
