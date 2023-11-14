const express = require('express');
const { authentication } = require('../middlewares');
const router = express.Router();

router.use('/auth', require('./auth'));
router.get('/', authentication, (req, res) => res.send('TEST'));

module.exports = router;
