const Sequelize = require('sequelize');

module.exports = function (app) {
  const connectionString = app.get('postgres');
  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    protocol: 'postgres',
    define: {
      freezeTableName: true
    },


    dialectOptions: {


      // ssl:{
      //   sslStrict: false, // turning off sslStrict mode
      //   rejectUnauthorized: false, // disabling its ability to reject Unauthorised connections
      // }

    }

  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    app.set('sequelizeSync', sequelize.sync());

    return result;
  };
};
