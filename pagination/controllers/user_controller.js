const mockData = require('../mock_data');

async function handleGetUserInfo(req, res) {
    const id = req.params.id;
    res.json(mockData[id]);
}

async function handleGetAllUsers(req, res) {

    try {
        console.log('entered');

        
        const result = await res.paginatedResult;
        res.json(result);
    } catch (err) {
        return res.json({ error: err.message });
    }
}

module.exports = {
    handleGetUserInfo,
    handleGetAllUsers
}