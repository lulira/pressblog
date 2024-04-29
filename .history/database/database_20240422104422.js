const Sequelize = require("sequelize");
const connection = new Sequelize('guiapress', 'root', 'Ferguson**', {
    host: 'localhost',
    dialect: 'mysql'
    log

});

module.exports = connection;