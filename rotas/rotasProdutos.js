const express = require ('express');
const Prodcontroller = require("../controllers/ProdutoController")
const router = express.Router();

router.get('/produtos', Prodcontroller.maisVendidos);




module.exports = router;