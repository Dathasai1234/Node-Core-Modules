const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("This works everytime");
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log("This is a middleware");
    res.send('<h1>This is add-product path</h1>');
});

app.use('/', (req, res, next) => {
    console.log("This is another middleware");
    res.send('<h1>This is url path</h1>');
}); 

app.listen(3000);
