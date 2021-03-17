//=======CONFIGURATION=====//
const express = require('express')
const bcrypt = require('bcrypt');
const ROUTER = express.Router()

// access user model
const User = require('../models/user');


ROUTER.get('/new', (req,res) => {
    console.log('Create new users route was hit');
    // 
    res.redirect('/sessions/new')
})

// curl -X POST -H "Content-Type: application/json" -d '{"username":"peter@example.com","password":"pw123"}' 'http://localhost:3003/users'
// curl -X POST -H "Content-Type: application/json" -d '{"username":"rikk@example.com","password":"pw456"}' 'http://localhost:3003/users'
// curl -X POST -H "Content-Type: application/json" -d '{"username":"eric@example.com","password":"pw789"}' 'http://localhost:3003/users'
ROUTER.post('/', (req,res) => {
    console.log(req.body);

    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    User.create(req.body, (err, newUser) => {
        console.log('User created: ', newUser);
        res.redirect('/mockbuster');
    })
});


module.exports = ROUTER;