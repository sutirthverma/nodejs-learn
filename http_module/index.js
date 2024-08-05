const http = require('http');
const fs = require('fs');
const url = require('url');

let count = 0;

const server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') return res.end();

    count++;
    const log = `\n${Date.now()}: New Request Recieved\n ${req.url}`;

    const myUrl = url.parse(req.url, true);
    console.log(`Url: ${JSON.stringify(myUrl)}`);    

    fs.appendFile('demo.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                res.end('Homepage');
                break;
            case '/about-us':
                const username = myUrl.query.name;
                const age = myUrl.query.age;
                res.end(`I'm ${username} and my age is ${age}`);
                break;
            default:
                res.end(http.STATUS_CODES['404']);
        }
    });

});

server.listen(8000, () => console.log('Server started'));