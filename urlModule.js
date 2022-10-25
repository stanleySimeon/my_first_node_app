var url = require('url');

// Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
var adr = 'https://docs.google.com/spreadsheets/d/1HkUyBZdcpGz_aEUa8W_rtNhS739jly8HY6sXVPPSAro/edit#gid=2041017957';
var q = url.parse(adr, true);

console.log(q.host); // returns 'docs.google.com'
console.log(q.pathname); // returns '/spreadsheets/d/1HkUyBZdcpGz_aEUa8W_rtNhS739jly8HY6sXVPPSAro/edit'
console.log(q.search); // returns '?gid=2041017957'

var qdata = q.query; // returns an object: { gid: 2041017957 }
console.log(qdata.moth); // returns 2041017957
