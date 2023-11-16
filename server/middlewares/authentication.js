const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models');

const authentication = async (req, res, next) => {
	try {
		const { authorization } = req.headers;
		// console.log('authentication');
		// console.log(req.file, req.body);

		if (!authorization) {
			throw {
				name: 'Unauthenticated',
				message: 'Token must be provided',
			};
		}

		const token = authorization.replace('Bearer ', '');
		const { id } = verifyToken(token);
		const user = await User.findByPk(id);

		if (!user) {
			throw {
				name: 'Unauthenticated',
				message: 'Invalid token',
			};
		}

		req.user = user;
		next();
	} catch (error) {
		// console.log(error);
		next(error);
	}
};

module.exports = authentication;
