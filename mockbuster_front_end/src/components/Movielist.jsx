import React, { Component } from 'react'

class Movielist extends Component {
  render() {
    return (
      <div className="movieList column is-3 m-2">
        <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	">My Watch List</h1>

        {
          this.props.movies.map(movie => {
            return (
              <div className="column m-2" key={movie._id}>
                 <div class="box">
                   {movie.title}
                  </div>
                </div>
            )
          })
        }
      </div>
    )
  }
}


export default Movielist;
