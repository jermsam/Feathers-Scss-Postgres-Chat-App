const app = require('../src/app');
const env = process.env.NODE_ENV || 'development';
console.log(env);
const dialect = 'postgres'; // Or your dialect name
const url =app.get(dialect);
console.log(url);

module.exports = {
  [env]: {
    dialect,
    url,
    migrationStorageTableName: '_migrations',

    dialectOptions: {

      ssl:{
        sslStrict: false, // turning off sslStrict mode
        rejectUnauthorized: false, // disabling its ability to reject Unauthorised connections
      }

    }

  }
};
