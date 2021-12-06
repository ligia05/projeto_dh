const produtos = require ('../database/Produtos.json');

const controller = { 
    maisVendidos: (req,res)=>{
         res.send(produtos);
    }
}
module.exports  = controller