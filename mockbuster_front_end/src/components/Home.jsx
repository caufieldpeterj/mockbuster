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
    }
  }
  // componentDidMount() {
  //   //GET message from server using fetch api
  //   fetch('/api/home')
  //     .then(res => res.text())
  //     .then(res => this.setState({message: res}));
  // }
  render() {
    return (

      <section className="section">
        <div className="container">
          <div className="columns is-centered">

            {/* FORM COLUMN */}
            <Form />

            {/* WATCHLIST COLUMN */}
            <Movielist movies={this.props.state.movies} />

            {/* MOVIE INFORMATION */}
            <Movieinfo />


          </div>
        </div>
      </section>

    );
  }
}