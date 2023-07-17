const express = require('express');
const path = require('path');

const rootdir = require('../Util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    //***************************************************
    //! which redirects to that specific url
    res.redirect('/');
});

module.exports = router;