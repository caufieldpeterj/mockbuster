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
    console.log(this.props)
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
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this)



  }
 
  // componentDidMount(movie) {
  //     if (this.props.movie) {

  //   this.getMovies()
  //   } else {
  //     console.log("movie not mounted yet");
  //   }
  // }

componentDidUpdate(movie) {
  //  console.log(this.props.movie)
  if (this.props.movie && !this.state.movie) {
    ///the issue is here.... it keeps on re-updating my state all the time because this stays true but I only
    this.setState({
      movie: this.props.movie,
      title: this.props.movie.title,
      director: this.props.movie.director,
      year: this.props.movie.year,
      platform: this.props.movie.platform,
      description: this.props.movie.description,
      image: this.props.movie.image
    })
    // console.log(this.props.movie)
    } else if (this.props.movie != this.state.movie) {
      this.setState({
        movie: this.props.movie,
        title: this.props.movie.title,
        director: this.props.movie.director,
        year: this.props.movie.year,
        platform: this.props.movie.platform,
        description: this.props.movie.description,
        image: this.props.movie.image
      })
    //  console.log(this.props.movie);
    //  console.log(this.state.movie);
    }

}



  handleChange(event) {
    console.log(event.target.id);
    this.setState({ [event.target.id]: event.target.value })
  }


  getMovies() {
    fetch(baseURL + '/mockbuster/' + this.props.movie._id)
    .then(data => {
      return data.json()},
      err => console.log(err))
    .then(parsedData => 
      this.setState({
        movie: parsedData,
        title: parsedData.title,
        director: parsedData.director,
        year: parsedData.year,
        platform: parsedData.platform,
        description: parsedData.description,
        image: parsedData.image
      }),
    err => console.log(err))
  }

  handleUpdate(id, e) {
    e.preventDefault()
    console.log("Update Button Pressed")
    this.toggleForm()

    // console.log(id)

    // Take object and convert it into a string, so mongo can read it 
    fetch(baseURL + '/mockbuster/' + id, {
      method: 'PUT',
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
        this.props.handleEditMovie(e, resJson)
        // this.setState({ 
        //   title: '',
        //   director: '',
        //   year: 0,
        //   platform: '',
        //   description: '',
        //   image: ''
        // })
      }).catch(error => console.log({ 'Error': error }))
  }



  toggleForm() {
    console.log(this.state)
    this.setState(prevState => ({ toggleEdit: !prevState.toggleEdit }));
    console.log(this.state)

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

          <h2 className="is-size-5 has-text-weight-bold m-1">{this.props.movie ? this.state.title : null}</h2>
          <h2 className="is-size-6 is-italic m-1">{this.props.movie ? this.state.director : null} {this.props.movie ? this.state.year : null}</h2>

          <p className="m-1">{this.props.movie ? this.state.description : null}</p>

          {this.props.movie ? <button className="button is-link" onClick={this.toggleForm}>Edit</button> : null}



        </div>
      )
    } else {
      return (

        <div className="movieInfo column is-4 m-2">
          <h1 className="is-size-4 has-text-link has-background-warning has-text-centered m-3 is-uppercase has-text-weight-bold	"> Edit Movie</h1>

          <form onSubmit={(e) => this.handleUpdate(this.state.movie._id, e)}>

      

        {/* TITLE */}
          <div className="column">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <div className="control">
                  <input className="input" type="text" placeholder="Title" onChange={this.handleChange} id="title" name="title" value={this.state.title} />
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
                  <input className="input" type="text" placeholder="Director" onChange={this.handleChange} id="director" name="director" value={this.state.director} />
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
                        <input className="input" type="text" placeholder="Year" onChange={this.handleChange} id="year" name="year" value={this.state.year} />
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
                        <input className="input" type="text" placeholder="description" onChange={this.handleChange} id="description" name="description" value={this.state.description} />
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
                        <input className="input" type="text" placeholder="image" onChange={this.handleChange} id="image"  name="image" value={this.state.image} />
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
                        <input className="input" type="text" placeholder="platform" onChange={this.handleChange} id="platform"  name="platform" value={this.state.platform} />
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