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

app.listen(3000);
