const express = require('express');
const path = require('path');

const rootdir = require('../Util/path');

const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootdir, 'views', 'shop.html'))
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        docTitle: 'Shop', 
        path : '/', 
        hasProducts : products.length > 0,
        activeShop: true,
        productCSS: true,
    });
}); 

module.exports = router;