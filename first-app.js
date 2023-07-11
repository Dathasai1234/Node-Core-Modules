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

const server = http.createServer((req, res) => {  // Create a server using the http.createServer() method.
    console.log(req.url, req.headers, req.method);  // Log the URL, headers, and method of the incoming request.
    // process.exit();     // stops the eventloop and exits the server
    
    res.setHeader('content-Type', 'text/html');  // Set the content type of the response to 'text/html'.

    res.write('<html>');  // Write the opening html tag to the response.
    res.write('<head><title>My first page</title></head>');  // Write the head section of the HTML.
    res.write('<body><h1>Welcome to the node.js server</h1></body>');  // Write the body section of the HTML.
    res.write('</html>');  // Write the closing html tag to the response.

    res.end();  // End the response and send it to the client.
});

// stored in a constant variable as the createserver methord returns an instance of a server.
// typically you don't call process.exit() in your code, because you don't want to quit your server. It will never take any further requests.
// You can always do that by pressing CTRL + C in the terminal/ command prompt window where you started your server (i.e. where you ran node app.js).

server.listen(3000);

///--------------------------------------------------
//! Notes

//? Certainly! In the provided code snippet, `res` is an abbreviation for "response" and `req` is an abbreviation for "request". These variables represent objects that are passed as parameters to the callback function in the `http.createServer()` method.

//? `req` stands for request and represents the incoming HTTP request from the client. It contains information about the request such as the URL (`req.url`), headers (`req.headers`), and HTTP method (`req.method`).

//? `res` stands for response and represents the server's response to the client's request. It is used to send the response back to the client. One can set response headers using the `res.setHeader()` method, write data to the response body using `res.write()`, and finally send the response back to the client using `res.end()`.

///***************************************************

//? This code creates a server using Node.js and the `http.createServer()` method. When a request is made to the server, the request object (`req`) and the response object (`res`) are passed as arguments to the callback function. 

//? The `req.url` provides the URL of the incoming request, `req.headers` gives access to the headers of the request, and `req.method` stores the HTTP method used in the request.

//? The `res.setHeader()` method is used to set the response header. In this case, we're setting the content type to `'text/html'`, indicating that the response will be HTML content.

//? Then, we use `res.write()` method to write HTML content to the response. We start with the opening `<html>` tag, then add the `<head>` section with a title, and finally the `<body>` section with a heading.

//? Finally, we call `res.end()` to end the response and send it to the client.