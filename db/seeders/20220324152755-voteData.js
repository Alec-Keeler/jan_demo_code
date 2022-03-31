'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Votes', [
     {
       userId: 2,
       postId: 1,
       voteType: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 3,
       postId: 1,
       voteType: false,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 4,
       postId: 1,
       voteType: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       postId: 3,
       voteType: false,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       postId: 2,
       voteType: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 2,
       postId: 4,
       voteType: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 2,
       postId: 5,
       voteType: false,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 4,
       postId: 3,
       voteType: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       postId: 4,
       voteType: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 5,
       postId: 1,
       voteType: false,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 5,
       postId: 4,
       voteType: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Votes', null, {});
  }
};
