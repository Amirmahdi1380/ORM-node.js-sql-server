'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      min_invest: {
        type: Sequelize.INTEGER
      },
      fund_needed: {
        type: Sequelize.INTEGER
      },
      fund_achieved: {
        type: Sequelize.INTEGER
      },
      expected_profit: {
        type: Sequelize.INTEGER
      },
      commission: {
        type: Sequelize.INTEGER
      },
      start_at: {
        type: Sequelize.DATE
      },
      finished_at: {
        type: Sequelize.DATE
      },
      profit: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};