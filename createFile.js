var fs = require('fs');

fs.appendFile('file.txt', 'Hello, this is my first file created in node.js', function(err) {
    if(err) throw err;
    console.log('Saved!');
})
