import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav'
import Form from './components/Form'
import Movielist from './components/Movielist'
import Movieinfo from './components/Movieinfo'


import Home from './components/Home'



import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []

    }
  }

  render() {
    return (
      <div>

        {/* NAV BAR */}
        <Nav />


        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>



      </div>
    );
  }
}




export default App;
