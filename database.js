const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myapp_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;