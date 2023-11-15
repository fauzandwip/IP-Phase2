const express = require('express');
const AuthController = require('../../controllers/AuthController');
const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/google', AuthController.google);

module.exports = router;
