'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          user_id: 1,
          scores: 0,
          enemies_count: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          scores: 5,
          enemies_count: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
