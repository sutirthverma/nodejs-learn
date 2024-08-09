const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();


let books = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//create a book
app.post('/book', (req, res) => {
    let book = req.body;

    books.push(book);
    console.log(req.body);
    
    res.send('Book is added to the database');
});

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.listen(PORT, () => console.log('Server has started.'));