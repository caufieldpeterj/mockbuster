import React, { Component } from 'react'

class Movielist extends Component {
  render() {
    return (

      <div className="movieList column is-3 m-2">
        <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	">My Watch List</h1>

        <div className="column m-2">
          <div class="box">
            Parasite
          </div>
          <div class="box">
            Home Alone 2: Lost In New York
          </div>
          <div class="box">
            Orlando
          </div>
          <div class="box">
            Half Baked
          </div>
          <div class="box">
            Clerks
          </div></div>
      </div>
    )
  }
}


export default Movielist;
