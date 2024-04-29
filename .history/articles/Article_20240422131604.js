const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category")

const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

// método (hasMany) faz o relacionamento de 1 => muitos
Category.hasMany(Article)

// método (belongsTo) faz o relacionamento de 1 => 1 no sequelize
Article.belongsTo(Category);

Article.sync()

module.exports = Article;
