const express = require('express');
const Router = express.Router();
const {
    handleGetSignUp,
    handlePostSignUp,
    handleUserLogIn,
    handleGetUserLoginPage,
    handleUserSignOut
} = require('../controllers/user_controller');


Router.route('/')
.get(handleGetSignUp)
.post(handlePostSignUp)

Router.route('/sign-out')
.post(handleUserSignOut)

Router.route('/login')
.get(handleGetUserLoginPage)
.post(handleUserLogIn)


module.exports = Router;