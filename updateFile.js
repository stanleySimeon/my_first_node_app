var fs = require('fs');

fs.appendFile('writeMethod.text', 'and I\'m new', function (err) {
    if(err) throw err;
    console.log('Updated!');
});
