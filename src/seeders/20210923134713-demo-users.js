'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'John',
      email: 'example@example.com',
      password: '123',
      location: '-12321312',
      role: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ohn',
      email: 'example@example.com',
      password: '321',
      location: '-+12312',
      role: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};



