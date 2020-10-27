


const fs = require('fs');
var glob = require("glob");

const rawList = fs.readFileSync('./data/filtered-idolsjalist_60-5.json');
let idolsList = JSON.parse(rawList);
let idolsListF = []

for (let idol of idolsList) {
    let { name } = idol;
    idolsListF.push(name);
}

console.log("file", idolsListF);


glob("+hatano", function (er, idolsListF) {

    if (er) {
        throw new Exception(er);
    }
    var requiredFiles = idolsListF.map(function (filename) {
        console.log("filename", filename);
        return require(filename);
    });

    console.log("requiredFiles", requiredFiles);
    // do something with the required files
});
