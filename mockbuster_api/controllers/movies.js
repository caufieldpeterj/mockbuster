//=======CONFIGURATION=====//
const express = require('express')
const MOCKBUSTER = express.Router()
const Movie = require('../models/movie.js')

// curl -X POST -H "Content-Type: application/json" -d '{"title":"GA Week 9"}' 'http://localhost:3003/mockbuster'
MOCKBUSTER.post('/', (req, res) => {
    console.log('we received a post request');
    console.log(req.body);
    res.send('we got a post request')
})

// MOCKBUSTER.get('/', (req, res) => {
//     res.send(Movie.find(req.body))
// })

module.exports = MOCKBUSTER