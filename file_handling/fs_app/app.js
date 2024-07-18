const fs = require('fs/promises');
const prompts = require('prompts');


(async () => {

    try {
        //Commands
        const CREATE_FILE = 'create a file';
        const READ_FILE = 'read a file';
        const ADD_IN_FILE = 'add in file';
        const DELETE_FILE = 'delete file';


        //Methods
        const createFile = async (path) => {
            try{
                let fileHandle;
                //we want to check whether or not we alreaedy have that file
                fileHandle = await fs.open(path, 'r');
                fileHandle.close();
                return console.log(`The file ${path} already exits`);
            } catch (err){
                const newFileHandle = await fs.open(path, 'w');
                console.log('A new file was successfully created');
                newFileHandle.close();
            }
        }

        const readFile = async (path) => {
            try{
                let fileHandle;
                //if file does not exist throw error that error that file does not exist
                fileHandle = await fs.open(path, 'r');
                let fileData = await fileHandle.readFile({encoding: 'utf-8'});
                console.log(fileData);
                fileHandle.close();
            } catch (err){
                if (err.code === 'ENOENT') {
                    console.log('File does not exist.');
                } else {
                    console.error('An error occurred:', err);
                }
            }
        }

        const addToFile = async (path) => {
            try{

                const response = await prompts({
                    type: 'text',
                    name: 'value',
                    message: 'Enter the text: ',
                });

                let existingFileHandle;
                //add in file
                existingFileHandle = await fs.open(path, 'a');

                fs.appendFile(path, `${response.value} `);
                existingFileHandle.close();
                return console.log('added to file');
            } catch(err){
                if (err.code === 'ENOENT') {
                    console.log('File does not exist.');
                } else {
                    console.error('An error occurred:', err);
                }
            }
        }

        const deleteFile = async (path) => {
            try{
                await fs.unlink(path);
            } catch(err){
                if(err.code === 'ENOENT'){
                    console.log('No file at this path to remove');
                }else {
                    console.log('An error occured while removing the file');
                    console.log(e);
                }
                
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
            }else if(command.includes(ADD_IN_FILE)){
                const filePath = command.substring(ADD_IN_FILE.length + 1);
                addToFile(filePath);
            }else if(command.includes(DELETE_FILE)){
                const filePath = command.substring(DELETE_FILE.length + 1);
                deleteFile(filePath);
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