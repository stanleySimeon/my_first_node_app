var fs = require('fs');

fs.writeFile('writeMethod.txt', 'Hello I was create with writeFile Method!', function (err) {
    if(err) throw err;
    console.log('Saved!');
});
