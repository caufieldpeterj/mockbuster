//=======CONFIGURATION=====//
const express = require('express')
const bcrypt = require('bcrypt');
const ROUTER = express.Router()


// access user model
const User = require('../models/user');


ROUTER.get('/new', (req,res)=>{
    console.log('New session route was hit');

    res.send('New session route')

    // res.send('Placeholder for new user page', {
    //     currentUser: req.session.currentUser
    // });
});


// curl -X POST -H "Content-Type: application/json" -d '{"username":"rikk@example.com","password":"pw456"}' 'http://localhost:3003/sessions'

ROUTER.post('/', (req,res) => {
    console.log(req.session);
    
    User.findOne({ username: req.body.username}, (err, foundUser) => {
        if (err) {
            console.log(err);
            res.send('Sorry, something went wrong in the DB');
        // no user exists in the database
        } else if (!foundUser) {
            res.send('Sorry no user found, try again');
        // compare passwords for a valid user
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                // we have a match
                req.session.currentUser = foundUser;

                res.redirect('/mockbuster')
            } else {
                res.send('Sorry no user found, try again');
            }
        }
    })

})

// reserving this route for a logout button
ROUTER.delete('/', (req, res) => {
    // when we delete the session, redirect user to login page
    req.session.destroy(() => {
        res.redirect('/sessions/new');
    })
});


/*
ROUTER.get('/create-session', (req, res) => {
    req.session.anyProperty = 'any value';
    console.log(req.session);
    res.redirect('/mockbuster');
})

ROUTER.get('/retrieve-session', (req,res) => {
    if (req.session.anyProperty === "some value") {
        console.log("session properties match");
    } else {
        console.log('session properties do not match')
    }
    res.redirect('/mockbuster');
})

ROUTER.get('/update-session', (req, res) => {
    req.session.anyProperty = "some value";

    res.redirect('/mockbuster');
});

ROUTER.get('/destroy-session', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('we couldnt destroy the session')
        } else {
            console.log('we destroyed teh session')
        }
    })
})
*/


module.exports = ROUTER;