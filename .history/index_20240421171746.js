const express = require("express");
const app = express();
const BodyParser = require("body-parser");

//view engine
app.set('view engine', 'ejs');

//static 
app.use(express())


app.get("/", (req, res) =>{
    res.render("index")

})

app.listen(8080, () =>{

    console.log("O servidor está rodando!!");
})