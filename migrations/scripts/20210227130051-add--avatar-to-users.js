'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // We are adding a column avatar of type string in the up migration
    //but we should add it only if it does not exist
    return queryInterface.describeTable('users').then(attributes => {
      if ( !attributes.avatar ) {
        return queryInterface.addColumn('users', 'avatar', {
          type: Sequelize.STRING,
        });
      }
    });

  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // We are removing a column avatar of type string in the down migration
    // that is if it exists
    return queryInterface.describeTable('users').then(attributes => {
      if ( attributes.avatar ) {
        return queryInterface.removeColumn('users', 'avatar');
      }
    });
  }
};
