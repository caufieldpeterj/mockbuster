import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav'
import Form from './components/Form'
// import Movielist from './components/Movielist'
// import Movieinfo from './components/Movieinfo'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

import './App.css';
// import './App.sass';
import 'bulma/css/bulma.css'


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
          <Route path="/" render={props => 
            (<Home state={this.state}/>)
          }/>


          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>



      </div>
    );
  }
}




export default App;
