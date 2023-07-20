const { Sequelize, DataTypes } = require('sequelize');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const sequelize = new Sequelize(POSTGRES_URI);

const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = {Users, sequelize };