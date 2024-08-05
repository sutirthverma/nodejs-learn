const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') return res.end();
    const myUrl = url.parse(req.url, true);
    const log = `\n${Date.now()}: ${req.method} ${myUrl.pathname} New Request Recieved`;

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
            case '/sign-up':
                if(req.method == 'POST'){
                    //DB Query
                    res.end('success');
                }else if(req.method == 'GET'){
                    res.end('This is a sign up form');
                }
            default:
                res.end(http.STATUS_CODES['404']);
        }
    });

});

server.listen(8000, () => console.log('Server started'));