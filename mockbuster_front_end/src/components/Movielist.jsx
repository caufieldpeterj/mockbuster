import React, { Component } from 'react'
import Movieinfo from './Movieinfo'


class Movielist extends Component {
  constructor(props){
    super(props);
    this.state = {
         movie: null
    }
}
  render() {
    return (
      <div className="movieList column is-3 m-2">
        <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	">My Watch List</h1>

        {
          this.props.movies.map(movie => {
            return (
              <div className="column m-2" key={movie._id}>
                 <div class="box" onClick={(e) => this.props.handleViewMovie(e, movie)}>

                   <div className="columns is-vcentered">

                   <div className="column is-10">
                   {movie.title}
                   </div>


                  <div className="column is-2">
                   {/* <form action="/oneexercise/<%=Workout._id%>/<%= Workout.exercises[key]._id %>?_method=DELETE"
                  method="POST"> */}
                  <button className="delete is-medium" type="submit" value="DELETE" onClick={ (e) => {this.props.handleDeleteMovie(e, movie._id)}}></button>
                {/* </form> */}

                </div>

                </div>


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
