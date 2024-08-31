const User = require('../models/user_model');
const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');
const { setUser } = require('../services/auth');

async function handleGetSignUp(req, res){
    return res.render('sign_up');
}

async function handlePostSignUp(req, res){
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({message: 'Please enter correct details'});
    }

    await User.create({
        username: username,
        email: email,
        password: password
    });

    return res.render('login');
}

async function handleGetUserLoginPage(req, res){
    return res.render('login');
}

async function handleUserLogIn(req, res){
    
    const {email, password} = req.body;
    const user = await User.findOne({email: email, password: password});
    console.log(user);


    if(!user){
        return res.render('login');
    }

    const uid = uuidv4();
    setUser(uid, user);
    res.cookie('uid', uid);

    return res.render('home');
}

async function handleUserSignOut(req, res){    
    res.clearCookie('uid').render('login');
}


module.exports = {
    handleGetSignUp,
    handlePostSignUp,
    handleUserLogIn,
    handleGetUserLoginPage,
    handleUserSignOut
}