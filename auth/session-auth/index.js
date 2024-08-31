const express = require('express');
const userRouter = require('./routes/user_route');
const viewRouter = require('./routes/view_route');
const cookieParser = require('cookie-parser');
const path = require('path');
const { connectToDb } = require('./connection');
const { restrictToRegisteredUsers } = require('./middlewares/auth_middleware');
const { urlencoded } = require('body-parser');
const app = express();
const PORT = 8000;

//Making db connection
connectToDb('mongodb://localhost:27017/session-auth')
.then(() => console.log(`Connected to DB`));

//Ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/', userRouter);
app.use('/home', restrictToRegisteredUsers, viewRouter);


app.listen(PORT, () => console.log(`Server Started`));