//=======CONFIGURATION=====//
const express = require('express')
const MOCKBUSTER = express.Router()
const Movies = require('../models/movie.js')

// curl -X POST -H "Content-Type: application/json" -d '{"title":"GA Week 9"}' 'http://localhost:3003/mockbuster'
MOCKBUSTER.post('/', async (req, res) => {
    console.log('we received a post request');
    Movies.create(req.body, (error, createdMovie) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdMovie)
    })
})

MOCKBUSTER.get('/', (req, res) => {
    res.send("Index route");
})

module.exports = MOCKBUSTER