const fs = require('fs');
let mockData;

fs.readFile('./MOCK_DATA.json', 'utf-8', (err, rawData) => {
    if(err){
        console.log(err.message);
        return;        
    }

    mockData = JSON.parse(rawData);
});

async function handleGetUserInfo(req, res){
    const id = req.params.id;    
    res.json(mockData[id]);
}

async function handleGetAllUsers(req, res){
    const page = req.query.page || 1;
    const limit = req.query.limit || mockData.length;

    const startIndex = (page - 1) * limit;
    const endIndex = (page * limit);
    const resultUsers = mockData.slice(startIndex, endIndex);

    res.json(resultUsers);
}

module.exports = {
    handleGetUserInfo,
    handleGetAllUsers
}