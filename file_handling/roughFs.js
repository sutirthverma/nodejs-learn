const fs = require('fs/promises');

async function readFile(filepath){

    try{
        let data = await fs.readFile('text.txt', 'utf-8');
        
    }catch(err){
        console.log(err.message);
    }
    
}

readFile('test.txt')
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message));