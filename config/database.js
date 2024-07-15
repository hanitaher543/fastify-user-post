const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize('dbPU', 'hani', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    
  });
  
  module.exports = sequelize;