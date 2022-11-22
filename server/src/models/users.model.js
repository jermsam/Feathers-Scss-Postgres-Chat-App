// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg:'User with email exists.'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar:{
      type: Sequelize.STRING,
    },
    username:{
      type: Sequelize.STRING,
    },
    isOnline:{
      type: Sequelize.BOOLEAN,
      defaultValue:false
    }

  }, {
    timestamps: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }

  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    this.hasMany(models.messages, {
      onDelete: 'CASCADE',
      foreignKey:'senderId'
    });
    this.hasMany(models.messages, {
      onDelete: 'CASCADE',
      foreignKey:'receiverId'
    });
  };

  return users;
};
