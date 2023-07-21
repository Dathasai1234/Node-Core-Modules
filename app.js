const express = require('express');
const path = require('path');

const adminData = require('./routes/admin'); 
const shoproutes = require('./routes/shop'); 
const rootdir = require('./Util/path');

//! import body parser
const bodyParser = require('body-parser');

const app = express();

//! to set values globally on our express application
//! So now we're telling express that we want to compile dynamic templates with the pug engine and 
app.set('view engine', 'pug');
//! where to find these templates.
app.set('views', 'views');

///***************************************************
//! body-parser above all the middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shoproutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootdir, 'views', 'page-not-found.html'))
    res.status(404).render('page-not-found', {'PNF': '404'})
})

app.listen(3000);
