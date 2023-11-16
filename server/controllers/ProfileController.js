const { User } = require('../models');
const cloudinary = require('../helpers/cloudinary');
const { randomUUID } = require('crypto');

class ProfileController {
	static async getProfile(req, res, next) {
		try {
			// const { authorization } = req.headers;

			// const token = authorization.replace('Bearer ', '');
			// const { id } = verifyToken(token);
			// const user = await User.findByPk(id);
			const { id, username, email, photoUrl } = req.user;

			res.status(200).json({
				id,
				username,
				email,
				photoUrl,
			});
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	static async updateImage(req, res, next) {
		try {
			// const { id } = req.params;

			console.log(req.file);
			console.log('trigerr');

			if (!req.file) {
				throw {
					name: 'BadRequest',
					message: 'Image file is required',
				};
			}

			const { mimetype, buffer, originalname } = req.file;
			// const user = await User.findByPk(id);

			const base64File = Buffer.from(buffer).toString('base64');
			const dataURI = `data:${mimetype};base64,${base64File}`;

			const data = await cloudinary.uploader.upload(dataURI, {
				public_id: `${originalname}_${randomUUID()}`,
			});

			await req.user.update({
				photoUrl: data.secure_url,
			});

			res.status(200).json({
				message: 'Image Profile success to update',
				data: {
					photoUrl: req.user.photoUrl,
				},
			});
		} catch (error) {
			console.log(error);
			next(error);
		}
	}
}

module.exports = ProfileController;
