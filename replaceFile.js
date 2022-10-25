var fs = require('fs');

fs.writeFile('writeMethod.txt', 'Hello I\'m replaced with writeFile Method!', function (err) {
    if(err) throw err;
    console.log('Replaced!');
});
