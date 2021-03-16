import React, { Component } from 'react'


class Form extends Component {
  render() {
    return (

      <div className="movieForm column m-2">
      <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	">Add a Movie</h1>
      <input class="input is-info m-1" type="text" placeholder="Movie Names" />
      <input class="input is-info m-1" type="text" placeholder="Director" />
      <input class="input is-info m-1" type="text" placeholder="Year" />
      <input class="input is-info m-1" type="text" placeholder="Description" />
      <input class="input is-info m-1" type="text" placeholder="Image" />
      <input class="input is-info m-1" type="text" placeholder="Platform" />
      <submit className="button is-link">Submit Movie</submit>
    </div>
    )
  }
}


export default Form;
