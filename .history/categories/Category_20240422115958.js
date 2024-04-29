const Sequelize = require("sequelize");
const connection = require("../database/database");


const Category = connection.define('categories', {
    title
})