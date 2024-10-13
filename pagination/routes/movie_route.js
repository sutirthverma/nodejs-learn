const express = require('express');
const Router = express.Router();
const {
    handleGetAllMovies,
    handleGetMovie
} = require('../controllers/movie_controller');

Router.route('/all')
.get(handleGetAllMovies)

Router.route('/:id')
.get(handleGetAllMovies)

module.exports = Router;