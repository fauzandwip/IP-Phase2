'use strict';

const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const users = require('../data/users.json').map((user) => {
			user.password = hashPassword(user.password);
			user.createdAt = user.updatedAt = new Date();
			return user;
		});

		await queryInterface.bulkInsert('Users', users);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};
