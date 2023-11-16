const { comparePassword } = require('../helpers/bcrypt');
const { User } = require('../models');
const { signToken } = require('../helpers/jwt');
const { OAuth2Client } = require('google-auth-library');
const { db, admin } = require('../helpers/firebase');
// const { getAuth } = require('@firebase/auth');
// const firebase = require('../helpers/firebase');
const getImageUrl = require('../helpers/randomCat');
// const { createUserWithEmailAndPassword } = require('firebase/auth');
// const { auth, db } = require('../db/firebase');
// const { setDoc, doc } = require('firebase/firestore');

class AuthController {
	static async register(req, res, next) {
		try {
			const { username, email, password } = req.body;

			// if (!username) {
			// 	throw {
			// 		name: 'BadRequest',
			// 		message: 'Username is required',
			// 	};
			// }

			let photoUrl = await getImageUrl();
			// console.log('photoUrl', photoUrl);

			const newUser = await User.create({
				username,
				email,
				password,
				photoUrl,
			});

			// res.send(newUser);

			// const newUser = await admin.auth().createUser({
			// 	email,
			// 	password: hashPassword(password),
			// });

			// const newUser2 = await admin.auth().updateUser(newUser.uid, {
			// 	username,
			// });

			if (!newUser.photoUrl) {
				photoUrl = 'https://imgur.com/kiUbT9m';
			}

			// console.log(newUser, 'user sequelize');
			await db.collection('users').add({
				id: newUser.id,
				username,
				email,
				photoUrl,
				login_by: 'email',
			});

			res.status(201).json({
				data: {
					id: newUser.id,
					username: newUser.username,
					email: newUser.email,
					photoUrl: newUser.photoUrl,
				},
			});
		} catch (error) {
			// console.log(error);
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
			// const user = await admin.auth().getUserByEmail(email);

			if (!user || !comparePassword(password, user.password)) {
				throw {
					name: 'Unauthenticated',
					message: 'Invalid email/password',
				};
			}

			const access_token = signToken({ id: user.id });

			res.status(200).json({
				access_token,
				data: {
					id: user.id,
					username: user.username,
					email: user.email,
					photoUrl: user.photoUrl,
				},
			});
		} catch (error) {
			// console.log(error);
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

			if (isNewRecord) {
				await db.collection('users').add({
					id: user.id,
					username: user.username,
					email: user.email,
					photoUrl: user.photoUrl,
					login_by: user.login_by,
				});
			}

			// console.log(user);
			res.status(isNewRecord ? 201 : 200).json({
				access_token: signToken({ id: user.id }),
				data: {
					id: user.id,
					username: user.username,
					email: user.email,
					photoUrl: user.photoUrl,
				},
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = AuthController;
