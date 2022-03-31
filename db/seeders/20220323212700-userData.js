'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
    {
      name: 'Dan',
      password: 'strongpassword',
      email: 'dan@dan.dan',
      faveBread: 'garlic bread',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Ray',
      password: 'vampslayer123',
      email: 'ray@ray.ray',
      faveBread: 'even more garlicy bread',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Rawaha',
      password: 'catlover6!',
      email: 'rawaha@rawaha.rawaha',
      faveBread: 'sourdough',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Ryan',
      password: 'thisismybankpass987',
      email: 'ryan@ryan.ryan',
      faveBread: 'focaccia',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Brad',
      password: 'ikneadtothink',
      email: 'brad@brad.brad',
      faveBread: 'bagels',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
