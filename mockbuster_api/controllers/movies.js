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
    Movies.find({}, (err, listedMovie) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(listedMovie)
    })
})
//UPDATE 
<<<<<<< HEAD
<<<<<<< HEAD
// curl -X PUT -H "Content-Type: application/json" -d '{"title":" Test Update "}' 'http://localhost:3003/mockbuster/605224fba498748a3de7471d'
=======
// curl -X PUT -H "Content-Type: application/json" -d '{"title":" GA update week 9"}' 'http://localhost:3003/mockbuster'
>>>>>>> ec5a871b681f4bd747d7275c5b5d5d412e86e4d1
=======
// curl -X PUT -H "Content-Type: application/json" -d '{"title":" Test Update "}' 'http://localhost:3003/mockbuster/605224fba498748a3de7471d'
>>>>>>> 1a0f0e8f883f5591773b480d132b9b9fbbaeb7a5
MOCKBUSTER.put('/:id', (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMovie) => {
    console.log(req.params.id)
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedMovie)
  })
  console.log(req.params.id)
})
//DELETE
<<<<<<< HEAD
<<<<<<< HEAD
// curl -X DELETE 'http://localhost:3003/mockbuster/60522dd941073d8d6541425b' 
MOCKBUSTER.delete('/:id', (req, res) => {
=======
// curl -X DELETE 'http://localhost:3003/mockbuster/60521c8cb16acf56ca3ac470' 
MOCKBUSTER.delete('/:id', (req, res) => {  
>>>>>>> ec5a871b681f4bd747d7275c5b5d5d412e86e4d1
=======
// curl -X DELETE 'http://localhost:3003/mockbuster/60522dd941073d8d6541425b' 
MOCKBUSTER.delete('/:id', (req, res) => {
>>>>>>> 1a0f0e8f883f5591773b480d132b9b9fbbaeb7a5
  Movies.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedMovie)
  })

})

module.exports = MOCKBUSTER

