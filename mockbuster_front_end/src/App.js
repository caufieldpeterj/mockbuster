import React, { Component } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Movielist from './components/Movielist'
import Movieinfo from './components/Movieinfo'
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

        <section className="section">
          <div className="container">
            <div className="columns is-centered">

              {/* FORM COLUMN */}
              <Form />

              {/* WATCHLIST COLUMN */}
              <Movielist />

              {/* MOVIE INFORMATION */}
              <Movieinfo />
          
            </div>
          </div>
        </section>
      </div>
    )
  }
}




export default App;
