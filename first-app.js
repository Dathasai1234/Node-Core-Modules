//! Creating a fully functional web server.

const http = require('http');

//! method 1

// function rqListener(req, res) {

// }

// http.createServer(rqListener);

//***************************************************
//! method 2 Anoynomous function

// http.createServer(function(req, res) {
    
// });

//***************************************************
/*
    If X happen, Y should happen

    X - request comes
    Y - Please execute these functions
*/

//***************************************************
//! method 3 next Gen function

const server = http.createServer((req, res) => {
    console.log(req);
});

// stored in a constant variable as the createserver methord returns an instance of a server.

server.listen(3000);