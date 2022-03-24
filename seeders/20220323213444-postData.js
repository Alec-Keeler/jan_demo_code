'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Posts', [
  {
    content: 'This is a post about how cool garlic bread is!',
    title: 'Is Garlic Bread good?',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: 'Pandemic sourdough hipsters ain\'t got nothin on me',
    title: 'I liked sourdough before it was cool',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: 'Share your best bread puns.  I know you\'ll rise to the occasion.  Please don\'t post crumby jokes, we deserve butter than that.',
    title: 'PUNS',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: 'The worst part of the pandemic is that "bringing pastries to the office" isn\t a thing any more D:.  Remote work sucks, I need those office pastries!',
    title: 'Worst part of the pandemic?',
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: 'TEST POST',
    title: 'Test 1',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: 'TEST POST',
    title: 'Test 2',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: 'TEST POST',
    title: 'Test 3',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: 'TEST POST',
    title: 'Test 4',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
