const express = require('express');
const path = require('path');
const rootdir = require('../Util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
    res.render('add-product', {docTitle: 'add-product', path: '/admin/add-product'});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    //***************************************************
    //! which redirects to that specific url
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;