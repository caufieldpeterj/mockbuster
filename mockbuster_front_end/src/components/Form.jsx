import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom';


// import { Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help, InputFile } from 'react-bulma-components'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      title: '',
      director: '',
      year: 0,
      platform: '',
      description: '',
      image: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  // handleAddMovie (movie) {
  //   const copyMovies = [...this.state.movies]
  //   copyMovies.unshift(movie)
  //   this.setState({
  //     movies: copyMovies,
  //     title: '',
  //     director: '',
  //     year: 0, 
  //     platform: '',
  //     description: '',
  //     image: '' 
  //   })
  // }




  handleSubmit(event) {
    event.preventDefault()
    console.log("Submit Button Pressed")

    // Take object and convert it into a string, so mongo can read it 
    fetch(baseURL + '/mockbuster', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        director: this.state.director,
        year: this.state.year,
        platform: this.state.platform,
        description: this.state.description,
        image: this.state.image
      }),
      headers: {
        'Content-Type': 'application/json'
      }

      //A promise that takes the props and envokes the "handleAddBookmark" method found in app.js
    }).then(res => res.json())
      .then(resJson => {
        this.props.handleAddMovie(resJson)
        this.setState({
          title: '',
          director: '',
          year: 0,
          platform: '',
          description: '',
          image: ''
        })
      }).then( 
        console.log("this then statement")
        // this.props.history.push('/');


      ).catch(error => console.log({ 'Error': error }))
  }





  render() {
    return (
      <div className="movieForm column m-2">
        
        <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	">Add a Movie</h1>

        <form onSubmit={this.handleSubmit}>

        {/* TITLE */}
          <div className="column">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <div className="control">
                  <input class="input" type="text" placeholder="Title" onChange={this.handleChange} id="title" name="title" value={this.state.title} />
                  <span class="icon is-small is-left">
                    <i class="fas fa-book-reader" />
                  </span>
                </div>
              </p>
            </div>
          </div>

          {/* DIRECTOR */}
          <div className="column">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <div className="control">
                  <input class="input" type="text" placeholder="Director" onChange={this.handleChange} id="director" name="director" value={this.state.director} />
                  <span class="icon is-small is-left">
                    <i class="fas fa-book-reader" />
                  </span>
                </div>
              </p>
            </div>
          </div>

      {/* YEAR */}
      <div className="column">
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <div className="control">
                        <input class="input" type="text" placeholder="Year" onChange={this.handleChange} id="year" name="year" value={this.state.year} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-book-reader" />
                        </span>
                      </div>
                    </p>
                  </div>
                </div>


        {/* Description */}
        <div className="column">
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <div className="control">
                        <input class="input" type="text" placeholder="description" onChange={this.handleChange} id="description" name="description" value={this.state.description} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-book-reader" />
                        </span>
                      </div>
                    </p>
                  </div>
                </div>

        {/* Image */}
        <div className="column">
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <div className="control">
                        <input class="input" type="text" placeholder="image" onChange={this.handleChange} id="image"  name="image" value={this.state.image} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-book-reader" />
                        </span>
                      </div>
                    </p>
                  </div>
                </div>


        {/* Platform */}
        <div className="column">
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <div className="control">
                        <input class="input" type="text" placeholder="platform" onChange={this.handleChange} id="platform"  name="platform" value={this.state.platform} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-book-reader" />
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
        
            {/* SUBMIT */}
            <div className="column">
              <button class="button is-link is-rounded mt-1" type="submit">Add Movie</button>
            </div>        
      </form>
      </div>
    )
  }
}


export default Form;
