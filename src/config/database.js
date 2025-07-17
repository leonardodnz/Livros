const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Arquivo do banco SQLite
  logging: false, // Desativa logs de SQL
});

module.exports = sequelize;