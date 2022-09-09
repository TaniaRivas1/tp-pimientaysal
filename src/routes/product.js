var express = require('express');
var router = express.Router();

const{detail} = require('../controllers/productController')

/* viene por /product */
router.get('/detail/:id', detail)

module.exports = router;
