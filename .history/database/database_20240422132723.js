const Sequelize = require("sequelize");
const { noTrueLogging } = require("sequelize/lib/utils/deprecations");
const connection = new Sequelize('guiapress', 'root', 'Ferguson**', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false

});

module.exports = connection;