import React, { Component } from 'react'

class Movieinfo extends Component {
  render() {
    return (
      <div className="movieInfo column is-4 m-2">

      <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	"> Information</h1>

      <figure class="image image is-4by5 m-5">
          <img src={this.props.movie ? this.props.movie.image : null}  />
        </figure>

      <h2 className="is-size-5 has-text-weight-bold m-1">{this.props.movie ? this.props.movie.title : null}</h2>
      <h2 className="is-size-6 is-italic m-1">{this.props.movie ? this.props.movie.director : null} {this.props.movie ? this.props.movie.year : null}</h2>

      <p className="m-1">{this.props.movie ? this.props.movie.description : null}</p> 


        
        {/* <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	"> Information</h1>
        <figure class="image image is-4by5 m-5">
          <img src="https://images-na.ssl-images-amazon.com/images/I/91sustfojBL._AC_SY879_.jpg" alt="this is a movie poster" />
        </figure>
        <h2 className="is-size-5 has-text-weight-bold m-1">PARASITE</h2>

        <p className="m-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum veniam laudantium ullam quae eaque sapiente qui nisi doloremque suscipit vel dolore doloribus, libero laboriosam, voluptatibus sed. Deserunt, earum doloribusssss.</p> */}
      </div>
    )
  }
}


export default Movieinfo;
