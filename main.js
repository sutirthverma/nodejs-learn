const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Enter directory name: ', (dirName) => 
    fs.mkdir(path.join(__dirname, dirName),cb)
);

function cb(err){
    if(err){
        return console.log(err);
    }else{
        console.log('Directory created successfully');
    }
}

