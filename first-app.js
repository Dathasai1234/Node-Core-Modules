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
    console.log(req);   // in the eventloop
    process.exit();     // stops the eventloop and exits the server
});

// stored in a constant variable as the createserver methord returns an instance of a server.
// typically you don't call process.exit() in your code, because you don't want to quit your server. It will never take any further requests.
// You can always do that by pressing CTRL + C in the terminal/ command prompt window where you started your server (i.e. where you ran node app.js).

server.listen(3000);