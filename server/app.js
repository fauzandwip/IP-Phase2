'use strict';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middlewares');

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.use(errorHandler);

module.exports = app;
