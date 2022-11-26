'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('messages', { id: Sequelize.INTEGER });
     */
    // We are changing a column receiverId of type string in the up migration
    //but we should add it only if it does not exist
    return queryInterface.changeColumn('messages', 'receiverId', {
      type: Sequelize.INTEGER,
      allowNull: true
    });

  },

  down: async (queryInterface,Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('messages');
     */
    // We are removing a column receiverId of type string in the down migration
    // that is if it exists
    return queryInterface.changeColumn('messages', 'receiverId', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  }
};
