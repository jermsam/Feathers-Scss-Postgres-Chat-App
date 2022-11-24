'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          msg:'User with email exists.'
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
    },{
      timestamps: false
    });


  },

  down: async (queryInterface,) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('users');
  }
};
