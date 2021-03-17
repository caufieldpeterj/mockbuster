import React, { Component } from 'react'
import Movieinfo from './Movieinfo'



// handleViewMovie = movie = {
//   this.setState({
//     movie
//   }); 
// }

class Movielist extends Component {
  constructor(props){
    super(props);
    this.state = {
         movie: null
    }
}

state={movie:[]} 





  render() {
    return (
      <div className="movieList column is-3 m-2">
        <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	">My Watch List</h1>

        {/* <Movieinfo movie={this.state.movie} /> */}

        {
          this.props.movies.map(movie => {
            return (
              <div className="column m-2" key={movie._id}>
                 <div class="box" onClick={() => this.props.handleViewMovie(movie)}>
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
