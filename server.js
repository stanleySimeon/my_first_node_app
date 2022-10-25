var http = require('http'); // Include the http module using require() method and store it in a variable named http.

// Use createServer() method of http module to create a server.
// Create a server object:
http.createServer(function (req, res) { // The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
  res.writeHead(200, {'Content-Type': 'text/html'}); // res.writeHead() method is used to write the response header.
  res.write(req.url); // Write a response to the client
  res.end(); // End the response
}).listen(8080); // The server object listens on port 8080

