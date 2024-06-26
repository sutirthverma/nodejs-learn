const readline = require('readline');
const prompts = require('prompts');
const { log } = require('console');


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What is your name: ', (arg) => {
//     console.log(`Your name is ${arg}`);
//     rl.close();
// })

// async function takeInput(){
//     const response = await prompts({
//         type: 'number',
//         name: 'value',
//         message: 'How old are you?',
//         validate: value =>  value <= 18 ? `Nightclubs is only 18+` : true
//     });

//     console.log(response.value);
// }

async function takeInput(){
    let response = await prompts({
        type: 'number',
        name: 'value',
        message: 'Enter the input',
    });

    console.log(response.value);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input sumtin: ', (res)=>{
    console.log(res);
    rl.close();
} );

// takeInput();