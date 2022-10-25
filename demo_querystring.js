var http = require('http'); // Include the http module using require() method and store it in a variable named http.
var url = require('url'); // Include the url module using require() method and store it in a variable named url.

http.createServer(function (req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    var q = url.parse(req.url, true).query; // The url.parse() method takes a URL string, parses it, and returns a URL object.
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
