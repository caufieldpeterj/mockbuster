import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

// == COMPONENTS == //
import Nav from './components/Nav'
import Form from './components/Form'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
// import Movielist from './components/Movielist'
// import Movieinfo from './components/Movieinfo'

// == CSS == //
import './App.css';
import 'bulma/css/bulma.css'
// import './App.sass';

// == CONNECTION TO DB == //
let baseURL = ''; 

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}
console.log('current base URL ' + baseURL); 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies()
  }

  // == FETCH MOVIES FROM MOCKBUSTER DB == //
  getMovies() {
    fetch(baseURL + '/mockbuster')
    .then(data => {
      return data.json()},
      err => console.log(err))
    .then(parsedData => 
      this.setState({movies: parsedData}),
    err => console.log(err))
  }

  
  render() {
    return (
       
      <div>

        {/* NAV BAR */}
          <Nav/>
     
        {/* REACT ROUTES */}
        <Switch>

          {/* //Pass Current State as Props to the Home Component */}
          {/* HOME.JSX is the parent of the ADD A MOVIE/WATCHLIST/INFORMATION Containers */}
          <Route path="/" render={props => (<Home state={this.state}/>)}/>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>

      </div>
    );
  }
}

export default App;
