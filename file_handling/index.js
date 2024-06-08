const { log } = require('console');
const file = require('fs');
const filePath = './test.txt';
const fileContent = 'Hello ji';

//Sync
//Args:: (1)File path and name (2)It's content
//file.writeFileSync('./test.txt', 'Hello ji');

//Async
//Args:: (1)File path and name (2)It's content (3)Callback function for error
// file.writeFile(filePath, fileContent, (err) => console.log(err));


//Async file reading
// file.readFile(filePath, 'utf-8', (err, res) => {
//     if (err) {
//         console.log('Error');
//     } else {
//         console.log(res);
//     }
// });

file.appendFileSync(filePath, '\nThis is new content');
file.readFile(filePath, 'utf-8', (err, res) => console.log(res))