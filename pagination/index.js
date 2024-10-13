const express = require('express');
const app = express();
const userRouter = require('./routes/user_route');
const movieRouter = require('./routes/movie_route');

const {
    paginatedResult
} = require('./middlewares/pagination_mw')

const mockData = require('./mock_data');
const movieMockData = require('./movie_mock_data');

app.use('/movie', paginatedResult(movieMockData), movieRouter);

app.use('/user', paginatedResult(mockData) , userRouter);


app.get('/', (req, res) => {
    res.send('Hello world');
})


app.listen( 8000, () => {
    console.log(`Server started`);    
})