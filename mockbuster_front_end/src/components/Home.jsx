import React, { Component } from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
import Form from './Form'
import Movielist from './Movielist'
import Movieinfo from './Movieinfo'

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

// To set state to where the movie clicked on is shown in the parent's state
  handleViewMovie(movie) {
    console.log(movie);
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
            <Movielist movies={this.props.state.movies} handleViewMovie={this.handleViewMovie.bind(this)} />

            {/* MOVIE INFORMATION */}
            <Movieinfo movie={this.state.movie} />


          </div>
        </div>
      </section>

    );
  }
}