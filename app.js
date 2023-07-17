const express = require('express');

const adminroutes = require('./routes/admin'); 
const shoproutes = require('./routes/shop'); 

//! import body parser
const bodyParser = require('body-parser');

const app = express();

///***************************************************
//! body-parser above all the middlewares
app.use(bodyParser.urlencoded({extended: false}))

app.use(adminroutes);
app.use(shoproutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(5000);
