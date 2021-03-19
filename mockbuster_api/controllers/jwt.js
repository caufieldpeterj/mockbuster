const jwt = require('jsonwebtoken')
const express = require('express')
const APP = express.Router()

APP.use(express.json())
const User = require('../models/user')


APP.post('/', (req, res) => {
    const username = req.body.username
    const accessToken = 
    jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

/*
//Build the jwt authorization functionality

*/
module.exports = APP