const express = require("express");
const app = express();

app.set('view engine', 'ejs');


app.get("/", (req, res) =>{
    res.render("")

})

app.listen(8080, () =>{

    console.log("O servidor está rodando!!");
})