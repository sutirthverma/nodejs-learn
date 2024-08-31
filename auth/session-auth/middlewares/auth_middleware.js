const {
    getUser
} = require('../services/auth');

async function restrictToRegisteredUsers(req, res, next){
    const userId = req.cookies?.uid;
    let user = getUser(userId);
    console.log(userId);
    

    if(!userId || !user){
        return res.render('login');
    }

    req.user = user;
    next();
}

module.exports = {
    restrictToRegisteredUsers
}