import React, { Component } from 'react'


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}

class Movieinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      toggleEdit: false,
      title: '',
      director: '',
      year: 0,
      platform: '',
      description: '',
      image: ''
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.getMovies = this.getMovies.bind(this);

  }
 
 
  // componentDidMount() {
  //   if (this.props.movie) {
  //   this.getMovies()
  //   } else {
  //     console.log("movie not mounted yet");
  //   }

  // }

  componentDidUpdate(movie) {
      if (this.props.movie) {

    this.getMovies()
    } else {
      console.log("movie not mounted yet");
    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }


  getMovies() {
    fetch(baseURL + '/mockbuster/' + this.props.movie._id)
    .then(data => {
      return data.json()},
      err => console.log(err))
    .then(parsedData => 
      this.setState({movie: parsedData}),
      // console.log(parsedData),
    err => console.log(err))
  }



  toggleForm() {
    this.setState(prevState => ({ toggleEdit: !prevState.toggleEdit }));
  }

  render() {

    if (this.state.toggleEdit === false) {
      return (
        <div className="movieInfo column is-4 m-2">
 
          <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	"> Information</h1>

          <figure class="image image is-4by5 m-5">
            {this.props.movie ?
              <img src={this.props.movie.image} /> : null
            }
          </figure>

          <h2 className="is-size-5 has-text-weight-bold m-1">{this.props.movie ? this.props.movie.title : null}</h2>
          <h2 className="is-size-6 is-italic m-1">{this.props.movie ? this.props.movie.director : null} {this.props.movie ? this.props.movie.year : null}</h2>

          <p className="m-1">{this.props.movie ? this.props.movie.description : null}</p>

          {this.props.movie ? <button className="button is-link" onClick={this.toggleForm}>Edit</button> : null}



        </div>
      )
    } else {
      return (

        <div className="movieInfo column is-4 m-2">
          <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	"> Edit Movie</h1>

          <form onSubmit={this.handleSubmit}>

        {/* TITLE */}
          <div className="column">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <div className="control">
                  <input className="input" type="text" placeholder="Title" onChange={this.handleChange} id="title" name="title" value={this.state.movie.title} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-book-reader" />
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
                  <input className="input" type="text" placeholder="Director" onChange={this.handleChange} id="director" name="director" value={this.state.movie.director} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-book-reader" />
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
                        <input className="input" type="text" placeholder="Year" onChange={this.handleChange} id="year" name="year" value={this.state.movie.year} />
                        <span className="icon is-small is-left">
                          <i className="fas fa-book-reader" />
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
                        <input className="input" type="text" placeholder="description" onChange={this.handleChange} id="description" name="description" value={this.state.movie.description} />
                        <span className="icon is-small is-left">
                          <i className="fas fa-book-reader" />
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
                        <input className="input" type="text" placeholder="image" onChange={this.handleChange} id="image"  name="image" value={this.state.movie.image} />
                        <span className="icon is-small is-left">
                          <i className="fas fa-book-reader" />
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
                        <input className="input" type="text" placeholder="platform" onChange={this.handleChange} id="platform"  name="platform" value={this.state.movie.platform} />
                        <span className="icon is-small is-left">
                          <i className="fas fa-book-reader" />
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
        
            {/* SUBMIT */}
            <div className="column">
              <button className="button is-link is-rounded mt-1" type="submit">Edit Movie</button>
            </div>        
      </form>
         


          <button className="button is-link" onClick={this.toggleForm}>Back to Movie Information</button>
        </div>

      )
    }
  }
}

export default Movieinfo;


{/* <img src={this.props.movie ? this.props.movie.image : null} /> */ }