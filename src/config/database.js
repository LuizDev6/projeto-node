const { Sequelize } = require('sequelize');

// Configuração do banco de dados MySQL
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Desabilita os logs SQL no console
});

module.exports = sequelize;
