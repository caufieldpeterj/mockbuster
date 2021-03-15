// Dependencies
const express = require('express');
const mongoose = require('mongoose')

// Dependency Configuration
const APP = express();
const PORT = 3003;
const DBNAME = 'mockbuster'

// MIDDLEWARE   
APP.use(express.json());

// Configure Mongo connection
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose')
})

//controller logic
const movieController = require('./controllers/movies')
APP.use('/mockbuster', movieController) 

// Listener
APP.listen(PORT,()=> {
    console.log('listening on ' + PORT)
});
