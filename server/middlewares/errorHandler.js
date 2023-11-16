const errorHandler = (err, req, res, next) => {
	let status, message, messages;

	switch (err.name) {
		case 'SequelizeValidationError':
			status = 400;
			messages = err.errors.map((error) => {
				return error.message;
			});
			break;

		case 'BadRequest':
			status = 400;
			message = err.message;
			break;

		case 'JsonWebTokenError':
			status = 401;
			message = 'Invalid token';
			break;

		case 'Unauthenticated':
			status = 401;
			message = err.message ?? 'Unauthenticated';
			break;

		case 'SequelizeUniqueConstraintError':
			status = 409;
			message = err.errors[0].message;
			break;

		default:
			status = 500;
			message = 'Internal Server Error';
			break;
	}

	// switch (err.code) {
	// 	case 'auth/invalid-password':
	// 	case 'auth/invalid-email':
	// 	case 'auth/email-already-exists':
	// 		status = 400;
	// 		message = err.message;
	// 		break;
	// }

	// res.send(err);
	res.status(status).json(message ? { message } : { messages });
};

module.exports = errorHandler;
