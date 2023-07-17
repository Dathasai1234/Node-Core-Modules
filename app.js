const express = require('express');

const path = require('path');

const adminroutes = require('./routes/admin'); 
const shoproutes = require('./routes/shop'); 

//! import body parser
const bodyParser = require('body-parser');

const app = express();

///***************************************************
//! body-parser above all the middlewares
app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminroutes);
app.use(shoproutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
})

app.listen(5000);
