const fs = require('fs');
const testFolder = './test';
const rawList = fs.readFileSync('./data/filtered-idolsjalist_60-5.json');
let idolsList = JSON.parse(rawList);
let idolsListF = []

for (let idol of idolsList) {
    // console.log("idol", idol)
    let { id, name } = idol;
    idolsListF.push({ name });
}

// var file = fs.createWriteStream('array.txt');
console.log("idolsListF", idolsListF);

var file = fs.createWriteStream('array.txt');

// fs.readdirSync(idolsListF)


idolsListF.forEach(function (v) {

    fs.appendFile('array.txt', v.name + ',' + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            return
        }
    });

    fs.mkdir(`./ jav/${v.name}`, { recursive: true }, function (err) {
        if (err) {
            console.log(err)
        } else {
            // console.log("New directory successfully created.")
        }
    });

})
file.end();



