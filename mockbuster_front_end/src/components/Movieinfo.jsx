import React, { Component } from 'react'

class Movieinfo extends Component {
  render() {
    return (

      <div className="movieInfo column is-4 m-2">
        <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	"> Information</h1>
        <figure class="image image is-4by5 m-5">
          <img src="https://images-na.ssl-images-amazon.com/images/I/91sustfojBL._AC_SY879_.jpg" alt="this is a movie poster" />
        </figure>
        <h2 className="is-size-5 has-text-weight-bold m-1">PARASITE</h2>

        <p className="m-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum veniam laudantium ullam quae eaque sapiente qui nisi doloremque suscipit vel dolore doloribus, libero laboriosam, voluptatibus sed. Deserunt, earum doloribusssss.</p>
      </div>
    )
  }
}


export default Movieinfo;
