const { comparePassword } = require('../helpers/bcrypt');
const { User } = require('../models');
const { signToken } = require('../helpers/jwt');

class AuthController {
	static async register(req, res, next) {
		try {
			const { username, email, password, photoUrl } = req.body;

			const newUser = await User.create({
				username,
				email,
				password,
				photoUrl,
			});

			res.status(201).json({
				id: newUser.id,
				email: newUser.email,
			});
		} catch (error) {
			next(error);
		}
	}

	static async login(req, res, next) {
		try {
			const { email, password } = req.body;

			if (!email) {
				throw {
					name: 'BadRequest',
					message: 'Email is required',
				};
			}

			if (!password) {
				throw {
					name: 'BadRequest',
					message: 'Password is required',
				};
			}

			const user = await User.findOne({ where: { email } });

			if (!user || !comparePassword(password, user.password)) {
				throw {
					name: 'Unauthenticated',
					message: 'Invalid email/password',
				};
			}

			const access_token = signToken({ id: user.id });

			res.status(200).json({
				access_token,
				email: user.email,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = AuthController;
