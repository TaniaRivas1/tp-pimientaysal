const products = require('../data/product.json')

module.exports= {
    index: (req,res) =>{
            res.render('index', { products });
          
    }
}