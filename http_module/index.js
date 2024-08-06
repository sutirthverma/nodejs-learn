const http = require('http');
const express = require('express');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    return res.send('This is homepage');
})

app.get('/about-us', (req, res) => {
    const queries = req.query;
    return res.send(`My name is ${queries.name} and my age is ${queries.age}`);
})

app.listen(port, () => console.log('Server Started'));