const express = require("express");
const router = express.Router();

router.get("/adomin/categories/new", (req, res)=>{
    res.send("ROTA DE CATEGORIAS");
})



module.exports = router;