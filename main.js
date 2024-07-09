const fs = require('fs');
const path = require('path');
const readline = require('readline');
const prompt = require('prompts');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function takeInput(){
    let response = await prompt({
        type: 'number',
        name: 'value',
        message: 'Enter 1 to Make Directory\nEnter Any Other Key To Exit.'
    });

    switch (response.value){
        case 1:
            makeDirec();
            break;

        default: 
            console.log('Exiting...');                
    }    
}


takeInput();



// function makeDirec(){
//     rl.question('Enter directory name: ', (dirName) => 
//         fs.mkdir(path.join(__dirname, dirName),cb)
//     );
    
//     function cb(err){
//         if(err){
//             return console.log(err);
//         }else{
//             console.log('Directory created successfully');
//         }
//     }    
// }
