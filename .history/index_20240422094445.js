const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")

//view engine
app.set('view engine', 'ejs');

//static 
app.use(express.static('public'));

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//chamando o objeto de conexão
connection
.authenticate()
.then(())

app.get("/", (req, res) =>{
    res.render("index")

})

app.listen(8080, () =>{

    console.log("O servidor está rodando!!");
})