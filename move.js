var fs = require('fs');

// Assuming all files are in same folder
let files = ['test1.txt', 'test2.txt', 'test3.txt'];

// I am using simple for, you can use any variant here
for (var i = files.length - 1; i >= 0; i--) {
    var file = files[i];
    fs.rename('./' + file, './dest/' + file, function (err) {
        if (err) throw err;
        console.log('Move complete.');
    });
}
