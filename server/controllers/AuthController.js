const { comparePassword } = require('../helpers/bcrypt');
const { User } = require('../models');
const { signToken } = require('../helpers/jwt');
const { OAuth2Client } = require('google-auth-library');
// const { createUserWithEmailAndPassword } = require('firebase/auth');
// const { auth, db } = require('../db/firebase');
// const { setDoc, doc } = require('firebase/firestore');

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

			// const userCredential = await createUserWithEmailAndPassword(
			// 	auth,
			// 	email,
			// 	password
			// );

			// await setDoc(doc(db, 'users', userCredential.user.uid), {
			// 	uid: userCredential.user.uid,
			// 	username: username,
			// 	email: email,
			// });

			res.status(201).json({
				id: userCredential.user.uid,
				email: userCredential.user.email,
			});
			res.status(201).json({
				id: newUser.id,
				email: newUser.email,
			});
		} catch (error) {
			// console.log({ error });
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

			if (user.login_by !== 'email') {
				throw {
					name: 'BadRequest',
					message: `Please login with ${user.login_by}`,
				};
			}

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

	static async google(req, res, next) {
		try {
			const client = new OAuth2Client();
			const ticket = await client.verifyIdToken({
				idToken: req.headers.google_token,
				audience: process.env.GOOGLE_CLIENT_ID,
			});

			const payload = ticket.getPayload();
			const [user, isNewRecord] = await User.findOrCreate({
				where: {
					email: payload.email,
				},
				defaults: {
					username: payload.name,
					email: payload.email,
					password: 'jackS',
					login_by: 'google',
					photoUrl: payload.picture,
				},
			});

			res.status(isNewRecord ? 201 : 200).json({
				access_token: signToken({ id: user.id }),
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = AuthController;
