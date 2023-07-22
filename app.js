const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin'); 
const shoproutes = require('./routes/shop'); 
const rootdir = require('./Util/path');

//! import body parser
const bodyParser = require('body-parser');

const app = express();

//***************************************************
//! PUG

//! to set values globally on our express application
//! So now we're telling express that we want to compile dynamic templates with the pug engine and 
// app.set('view engine', 'pug');
//! where to find these templates.
// app.set('views', 'views');

//***************************************************
//! HandleBars

app.engine(
    'hbs', 
    expressHbs({
        layoutsDir: 'views/layouts/', 
        defaultLayout: 'main-layout', 
        extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'views');

///***************************************************
//! body-parser above all the middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shoproutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootdir, 'views', 'page-not-found.html'))
    res.status(404).render('page-not-found', {docTitle : '404'})
})

app.listen(5000);
