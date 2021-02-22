const app = require('../src/app');
const env = process.env.NODE_ENV || 'development';
const dialect = 'postgres'; // Or your dialect name
const url =app.get(dialect);
console.log(url);

module.exports = {
  [env]: {
    dialect,
    url,
    migrationStorageTableName: '_migrations'
  }
};
