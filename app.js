const express = require('express');
//! import body parser
const bodyParser = require('body-parser');

const app = express();

///***************************************************
//! body-parser above all the middlewares
app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"/> <button type="submit">Add Product<button/><form/>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    //***************************************************
    //! which redirects to that specific url
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>This is url path</h1>');
}); 

app.listen(3000);
