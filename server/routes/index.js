const express = require('express');
const { authentication } = require('../middlewares');
const ProfileController = require('../controllers/ProfileController');
const multerUpload = require('../helpers/mutler');

const router = express.Router();

router.use('/auth', require('./auth'));
router.get('/', authentication, (req, res) => res.send('TEST'));
router.get('/profile', authentication, ProfileController.getProfile);
router.put(
	'/profile/img-url',
	authentication,
	multerUpload.single('imageUrl'),
	ProfileController.updateImage
);
router.delete('/user', authentication, ProfileController.deleteUser);

module.exports = router;
