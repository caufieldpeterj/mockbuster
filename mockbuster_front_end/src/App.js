import { render } from '@testing-library/react'
import React, { Component } from 'react'
// import './App.css';


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

        <h1>This is MockBuster</h1>
      </div>
    )
  }
}




export default App;
