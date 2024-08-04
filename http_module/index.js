const http = require('http');
const fs = require('fs');

let count = 0;

const server = http.createServer((req, res) => {
    count++;
    const log = `\n${Date.now()}: New Request Recieved\n ${req.url}`;

    if (req.url != '/favicon.ico') {
        fs.appendFile('demo.txt', log, (err, data) => {
            switch (req.url) {
                case '/':
                    res.end('Homepage');
                    break;
                case '/about-us':
                    res.end(`I'm Sutirth Verma`);
                    break;
                default:
                    res.end(http.STATUS_CODES['404']);
            }
        });
    }
});

server.listen(8000, () => console.log('Server started'));