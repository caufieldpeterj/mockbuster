//=======CONFIGURATION=====//
const express = require('express')
const MOCKBUSTER = express.Router()
const Movie = require('../models/movie')

//====INDEX====//

MOCKBUSTER.get('/', (req, res) => {
    res.send('controller heard')
})

module.exports = MOCKBUSTER