const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

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

//***************************************************


//? In the HTML code you provided, the action attribute and the POST method have the following meanings:

//? action attribute: This attribute specifies the URL or endpoint where the form data will be submitted to. In your example, the action attribute is set to /message. When the form is submitted, the data will be sent to the /message URL on the server-side.

//? method attribute: This attribute specifies the HTTP method that will be used to send the form data. In your example, the method attribute is set to POST. This means that when the form is submitted, the data will be sent to the server using a POST request.

//? So, when a user fills in the form and clicks the "Send" button, the browser will send a POST request to the server at the /message URL, including the data from the input field named "message" in the request body. The server can then process the data sent in the POST request and perform any necessary actions based on the received data.

//***************************************************

//? In your HTML code snippet, the name attribute is used in the <input> element. The name attribute specifies the name or key that will be associated with the value entered in the input field. In this case, the input field has the name "message". When the form is submitted, the data entered in the input field will be sent to the server with the name "message" as the key and the corresponding value as the user input.

//? The name attribute is important because it allows you to access the submitted data on the server-side. When the form is submitted, you can retrieve the value of the input field named "message" from the request body on the server and perform further processing or store it in a database, for example.