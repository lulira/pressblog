const express = require("express");
const app = express();
const BodyParser = 

app.set('view engine', 'ejs');


app.get("/", (req, res) =>{
    res.render("index")

})

app.listen(8080, () =>{

    console.log("O servidor está rodando!!");
})