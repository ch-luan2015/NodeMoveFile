const testFolder = './test';

const fs = require('fs');
var file = fs.createWriteStream('array.txt');

fs.readdirSync(testFolder).forEach(function (v) {
    fs.appendFile('array.txt', v.concat(",") + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            return
        }
    })

    fs.mkdir(`./ jav/${v}`, { recursive: true }, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("New directory successfully created.")
        }
    })

})
file.end();



