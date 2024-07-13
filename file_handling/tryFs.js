//Proimse API
// const fs = require('fs/promises');

// (async () => {
//     try{
//         await fs.copyFile('test.txt', 'copiedFile.txt');
//         console.log('file copied successfully');
//     } catch (err){
//         console.log(err.message);
//     }   
// })();


//Callback API
const fs = require('fs');

fs.copyFile('text.txt', 'cbtext.txt', (error) => {
    if(error){
        console.log(error.message);
    }else{
        console.log('file copied successfully');
    }
});