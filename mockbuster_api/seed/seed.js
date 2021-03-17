//Development @ SEED//
/*
Instructions
[]Go to seed directory
[]node seed.js
[]go into your mongo shell
[]show dbs - (mockbuster)
[]enter the collection then search for movies collections. 
*/
const Movies = require('../models/movie')
const DBNAME = 'mockbuster'

//connect seed file to mongoose database
const mongoose = require('mongoose')
const { exists } = require('../models/movie')
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`,
{useNewUrlParser: true, useUnifiedTopology: true})

//SEED
const testMovies = [
    new Movies({
        title: 'Hero Cats',
        director: 'John Leguizamo',
        year: '1999',
        platform: 'Freeform',
        description: 'They are hero cats from stellar city',
        image: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/4539317.jpg'
    }),
    new Movies({    
        title: 'Magic The Gathering',
        director: 'Wizards of the Coast',
        year: '1994',
        platform: 'Youtube',
        description: 'PLANESWALKERS!!!',
        image: 'https://i.ytimg.com/vi/BKWpC2Afuxw/maxresdefault.jpg'
    }),
    new Movies({    
        title: 'The Devil Wears Prada',
        director: 'David Frankel',
        year: '2006',
        platform: 'Netflix',
        description: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.',
        image: 'https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg'
    })
]
//loop through the seed data and save to database. 
let done = 0
for (let i = 0; i < testMovies.length; i++) {
    testMovies[i].save(function(err, result) {
        done++
        if (done === testMovies.length) {
            exit()
        }
    }) 
    function exit() {
        mongoose.disconnect()
    }
}