const express = require('express');
const Router = express.Router();
const {
    handleGetHomePage
} = require('../controllers/view_controller');

Router.route('/')
.get(handleGetHomePage)

module.exports = Router;