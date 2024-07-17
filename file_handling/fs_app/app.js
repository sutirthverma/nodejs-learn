const fs = require('fs/promises');

(async () => {

    try {
        //Commands
        const CREATE_FILE = 'create a file';
        const READ_FILE = 'read a file';
        const ADD_IN_FILE = 'add in file';
        const DELETE_FILE = 'delete a file';


        //Methods
        const createFile = async (path) => {
            try{
                let existingFileHandle;
                //we want to check whether or not we alreaedy have that file
                existingFileHandle = await fs.open(path, 'r');
                existingFileHandle.close();
                return console.log(`The file ${path} already exits`);
            } catch (err){
                const newFileHandle = await fs.open(path, 'w');
                console.log('A new file was successfully created');
                newFileHandle.close();
            }
        }

        const readFile = async (path) => {
            try{
                let existingFileHandle;
                //if file does not exist throw error that error that file does not exist
                existingFileHandle = await fs.open(path, 'r');
                let fileData = await existingFileHandle.readFile({encoding: 'utf-8'});
                console.log(fileData);
                existingFileHandle.close();
            } catch (err){
                console.log('File does not exist.')
            }
        }

        const addToFile = async (path) => {
            try{
                let existingFileHandle;
                //add in file
                existingFileHandle = await fs.open('path', 'r+');
                
            } catch(err){
                console.log('File does not exist');
            }
        }

        const file = await fs.open('./command.txt');

        file.on('change', async () =>{
            const fileSize = (await file.stat()).size;
            const buff = Buffer.alloc(fileSize);
            const offset = 0;
            const length = fileSize;
            const position = 0;
    
    
            await file.read(buff, offset, length, position);

            const command = buff.toString('utf-8');


            if(command.includes(CREATE_FILE)){
                const filePath = command.substring(CREATE_FILE.length + 1);
                createFile(filePath);
            }else if(command.includes(READ_FILE)){
                const filePath = command.substring(READ_FILE.length + 1);
                readFile(filePath);
            }
        })


        const watcher = fs.watch('./command.txt');
        for await (const event of watcher) {
            if (event.eventType == 'change') {
                file.emit('change');
            }
        }
    } catch (err) {
        console.log('Error: ' + err.message);
    } finally {
        file.close();
    }

})();