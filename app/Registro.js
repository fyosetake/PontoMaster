const Sequelize = require('sequelize');
const sequelize = require('./dbConfig');

const Registro = sequelize.define('Registro', {
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  timestamp: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Registro;
