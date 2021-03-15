// Dependencies
const express = require('express');
const mongoose = require('mongoose')

const APP = express();
const PORT = 3003;
const DBNAME = 'mockbuster'

// Configure Mongo connection
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose')
})

APP.get('/', (req, res)=> {
    res.send('Hey there')
})

APP.listen(PORT,()=> {
    console.log('listening on ' + PORT)
});
