var fs = require('fs');

fs.open('file1.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
})
