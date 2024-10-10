const express = require('express');
const app = express();
const userRouter = require('./routes/user_route');

app.use(userRouter);


app.get('/', (req, res) => {
    res.send('Hello world');
})


app.listen( 8000, () => {
    console.log(`Server started`);    
})