var fs = require('fs');

fs.unlink('file.txt', function(err) {
    if(err) throw err;
    console.log('File deleted!');
});

// rename a file
// fs.rename('file.txt', 'file2.txt', function(err) {
//     if(err) throw err;
//     console.log('File Renamed!');
// });
