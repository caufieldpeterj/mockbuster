//=======CONFIGURATION=====//
const express = require('express')
const MOCKBUSTER = express.Router()
const Movies = require('../models/movie.js')


//CREATE
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
//INDEX
// curl 'http://localhost:3003/mockbuster'
MOCKBUSTER.get('/', (req, res) => {
  //*add a mongoDB method to display titles in ascend/descend order*
    Movies.find({}, (err, listedMovie) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(listedMovie)
    })
})
//UPDATE 
// curl -X PUT -H "Content-Type: application/json" -d '{"title":" GA update week 9"}' 'http://localhost:3003/mockbuster'
MOCKBUSTER.put('/:watchlist', (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMovie) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedMovie)
  })
})
//DELETE
// curl -X DELETE 'http://localhost:3003/mockbuster' 
MOCKBUSTER.delete('/:watchlist', (req, res) => {
  Movies.findByIdAndRemove()
})

module.exports = MOCKBUSTER