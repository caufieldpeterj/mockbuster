// Dependencies
const express = require('express');
const mongoose = require('mongoose')
const session = require('express-session');
const bcrypt = require('bcrypt');
const cors = require('cors');


// import and configure dotenv
require('dotenv').config();

// Dependency Configuration
const APP = express();
const PORT = process.env.PORT;
const DBNAME = process.env.DBNAME;


// == WHITELIST / CORS OPTIONS == // 
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {

    if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
    } else {
        callback(new Error('Not Allowed by CORS'))
    }
    }
}

// MIDDLEWARE
APP.use(cors(corsOptions));
APP.use(express.json());
APP.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));

// Configure Mongo connection
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log(`Mongoose connected on PORT ${PORT}`)
})

//controller logic
const movieController = require('./controllers/movies')
const sessionsController = require('./controllers/sessions')
const usersController = require('./controllers/users')
const jwtController = require('./controllers/jwt')
APP.use('/', jwtController);
APP.use('/mockbuster', movieController);
APP.use('/sessions', sessionsController);
APP.use('/users', usersController);

// Listener
APP.listen(PORT,()=> {
    console.log('listening on ' + PORT)
});
