const Sequelize = require('sequelize');

const dbConfig = {
  username: 'root',
  password: 'senha123',
  database: 'db_pontomaster',
  host: '0332ace5122c',
  dialect: 'mysql',
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

module.exports = sequelize;
