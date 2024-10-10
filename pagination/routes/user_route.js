const fs = require('fs');
const express = require('express');
const Router = express.Router();
const {
    handleGetUserInfo,
    handleGetAllUsers
} = require('../controllers/user_controller');

Router.route('/user/all')
.get(handleGetAllUsers)

Router.route('/user/:id')
.get(handleGetUserInfo)




module.exports = Router;