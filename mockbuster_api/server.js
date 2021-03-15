// Dependencies
const express = require('express');
const mongoose = require('mongoose')

//controller logic
const movieController = require('./controllers/movies')

const APP = express();
const PORT = 3003;
const DBNAME = 'mockbuster'

// Configure Mongo connection
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose')
})

// MIDDLEWARE   
APP.use('/movies', movieController) //access movies.js controller...removed initial GET route w/i server.js.


APP.listen(PORT,()=> {
    console.log('listening on ' + PORT)
});
