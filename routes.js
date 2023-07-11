const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');  // Write the opening html tag to the response.
        res.write('<head><title>Enter Message</title></head>');  // Write the head section of the HTML.
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send<button/><form/></body>');  // Write the body section of the HTML.
        res.write('</html>');  // Write the closing html tag to the response.
    
        return res.end();  // End the response and send it to the client.
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        //! the data event will be fired whenever a new chunk is ready to be read.

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end;
            });
        })
    }
    
    res.setHeader('content-Type', 'text/html');  // Set the content type of the response to 'text/html'.

    res.write('<html>');  // Write the opening html tag to the response.
    res.write('<head><title>My first page</title></head>');  // Write the head section of the HTML.
    res.write('<body><h1>Welcome to the node.js server</h1></body>');  // Write the body section of the HTML.
    res.write('</html>');  // Write the closing html tag to the response.

    res.end();  // End the response and send it to the client.
}

module.exports = requestHandler;