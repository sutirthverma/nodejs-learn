const movieMockData = require('../movie_mock_data');

async function handleGetAllMovies(req, res) {
    try{
        const result = await res.paginatedResult;
        return res.json(result);
    }catch(err){
        res.json({error: err.message});
    }    
}

async function handleGetMovie(req, res) {
    try{
        const id = req.params.id;
        return res.json(movieMockData[i]);
    }catch(err){
        res.json({error: err.message});
    }    
}

module.exports = {
    handleGetAllMovies,
    handleGetMovie
}