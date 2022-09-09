var express = require('express');
var router = express.Router();

const{index} = require('../controllers/indexController')

/* viene por / */
router.get('/', index)

module.exports = router;
