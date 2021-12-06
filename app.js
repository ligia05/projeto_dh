const express = require("express");

const rotasProdutos= require ("./rotas/rotasProdutos");
let app = express();
 


app.use('/', rotasProdutos);
app.listen(3000, ()=>console.log("Servidor rodando na porta 3000")  )