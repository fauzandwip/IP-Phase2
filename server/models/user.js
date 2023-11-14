'use strict';
const { Model, InvalidConnectionError } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: { msg: 'Username is required' },
					notNull: { msg: 'Username is required' },
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: { msg: 'Email is required' },
					notNull: { msg: 'Email is required' },
					isEmail: { msg: 'Email is required' },
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: { msg: 'Password is required' },
					notNull: { msg: 'Password is required' },
					len: {
						args: [5, 10],
						msg: 'Password must be between 5 to 10 characters',
					},
				},
			},
			photoUrl: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);

	User.beforeCreate((instance) => {
		instance.password = hashPassword(instance.password);
	});
	return User;
};
