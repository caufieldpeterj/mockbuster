/* PURPOSE: Get the token from the User's username, authenticate the token, then redirect the user to the home page */
const jwt = require('jsonwebtoken')
const express = require('express')
const APP = express.Router()

APP.use(express.json())
const user = require('../models/user')

APP.get('/', authToken, (req, res) => {
//still pseudocoding response
})
/* POST route for username after sign in session of password is encrypted. once sign in is approved we will serialize the username and create a json web token. */
APP.post('/', (req, res) => {
    const username = req.body.username
    const accessToken = 
    jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})
/* Middleware Function of the GET route (sign-in???) which will authenticate the created JWT. */
function authToken (req, res, nex) {
    /* Variable for authorization header (JWT specific FORMAT rendered will be BEARER) and token used in header.*/
    const Header = req.headers['authorization']
    const token = Header && Header.split(' ')[1]
    /* If headers are valid, return approval. */
    if (token == null) return res.sendStatus(401)

    /* verify method takes the if result and runs an additional check to verify of JWT is valid.  */
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
    })
}
module.exports = APP