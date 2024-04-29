const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");
const { where } = require("sequelize");

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if (title != undefined) {

        Category.create({
            title: title,
            slug: slugify(title),
        }).then(() => {
            res.redirect("/");
        });
    } else {
        res.redirect("/admin/categories/new");
    }
});

router.get("/admin/categories", (req, res)=>{

    Category.findAll().then(categories=>{
        res.render("admin/categories/index", {categories: categories});
    })
    
})

router.post("/categories/delete", (req, res)=>{
var id = req.body.id;
if (id != undefined) {

    if (! isNaN(id)) {
        category.destroy({
            where:{
                id: id
            }
        })
    } else {
        
    }
} else {
    
}

})


module.exports = router;