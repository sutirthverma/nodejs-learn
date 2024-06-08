const { log } = require('console');
let http = require('http'), url = require('url'), fs = require('fs');
const { send } = require('process');
const { stringify, unescape } = require('querystring');
let clients = [];
let messages = [];
let url_parts;

function sendError(res, code, message) {
    res.writeHead(code, { 'Content-Type': 'text/plain' });
    res.end(message);
}

http.createServer(function (req, res) {
    try {
        //parse url
        url_parts = new URL(req.url);

    } catch (err) {
        return sendError(res, 400, 'Invalid URL');
    }

    if (url_parts.pathname == '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                return sendError(res, 500, 'Error reading file');
            }
            res.end(data);
        })
    } else if (url_parts.pathname.substring(0, 5) == '/poll') {
        //polling code
        let count = url_parts.pathname.replace(/[0-9]*/, '');
        console.log(count);

        if (messages.length > count) {
            res.end(JSON.stringify({
                count: messages.length,
                append: messages.slice(count).join("\n") + "\n",
            }))
        } else {
            clients.push(res);
        }
    } else if (url_parts.pathname.substring(0, 5) == '/msg/') {
        try {
            //message recieving 
            let msg = unescape(url_parts.pathname.substring(5));
            messages.push(msg);
            while (clients.length > 0) {
                let client = clients.pop();
                client.end(JSON.stringify({
                    count: messages.length,
                    append: msg + "\n"
                }))
            }
            res.end();
        } catch (error) {
            return sendError(res, 400, 'Invalid Message');
        }
    }

}).listen(8080, 'localhost');

console.log('Server running');