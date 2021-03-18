import React, { Component } from 'react';
import Form from './Form'
import Movielist from './Movielist'
import Movieinfo from './Movieinfo'


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}

export default class Home extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      movies: [],
      title: '',
      director: '',
      year: 0,
      platform: '',
      description: '',
      image: ''
    }
    this.handleAddMovie = this.handleAddMovie.bind(this)
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies() {
    fetch(baseURL + '/mockbuster')
    .then(data => {
      return data.json()},
      err => console.log(err))
    .then(parsedData => 
      this.setState({movies: parsedData}),
    err => console.log(err))
  }

  // A Method to handle the adding the movie 
  handleAddMovie(movie) {
    const copyMovies = [...this.state.movies]
    copyMovies.unshift(movie)
    this.setState({
      movies: copyMovies,
      title: '',
      director: '',
      year: 0,
      platform: '',
      description: '',
      image: ''
    })
  }

// Handle Delete a Movie 
  handleDeleteMovie(e, id) {
    e.preventDefault(); //To Prevent link from clicking and only button
    console.log("delete button")
    console.log(id)

    fetch(baseURL + '/mockbuster/'+id, {
      method: 'DELETE', 
    }).then(res => {
      const copyMovies =[...this.state.movies];
      const findIndex = this.state.movies.findIndex(movie => movie._id === id)
      copyMovies.splice(findIndex, 1); 
      this.setState({
        movies: copyMovies,
        movie: ''
      })
    })
  }

  //Handle Edit of MOvie
  handleEditMovie(e, resJson) {
    e.preventDefault();
    console.log("edit movie called");

    const id = (resJson._id);
    console.log(id)

    fetch(baseURL + '/mockbuster/'+id, {
      method: 'PUT', 
    }).then(res => {
      console.log("test")
      const copyMovies =[...this.state.movies];
      console.log(copyMovies)
      const findIndex = this.state.movies.findIndex(movie => movie._id  === id)
      copyMovies[findIndex] = resJson; 
      this.setState({
        movies: copyMovies,
      })
    })
  }

// To set state to where the movie clicked on is shown in the parent's state
  handleViewMovie(e, movie) {
    e.preventDefault();
    // console.log(movie);
    this.setState({
      movie
    });
  }

  render() {
    return (

      <section className="section">
        <div className="container">
          <div className="columns is-centered">

            {/* Three Page Containers are Organized */}

            {/* FORM COLUMN */}
            <Form handleAddMovie={this.handleAddMovie.bind(this)} />

            {/* WATCHLIST COLUMN */}
            <Movielist movies={this.state.movies} handleViewMovie={this.handleViewMovie.bind(this)}  handleDeleteMovie={this.handleDeleteMovie.bind(this)} />

            {/* MOVIE INFORMATION */}
            <Movieinfo movie={this.state.movie} handleViewMovie={this.handleViewMovie.bind(this)} handleEditMovie={this.handleEditMovie.bind(this)} />


          </div>
        </div>
      </section>

    );
  }
}