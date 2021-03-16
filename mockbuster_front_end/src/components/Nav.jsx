import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav classname="navbar has-shadow is-primary">
        <div classname="navbar-brand is-primary">

          <figure className="image is-96x96 ml-3">
            <img src="https://iconape.com/wp-content/png_logo_vector/blockbuster-video-1.png" alt="bbuster" classname="py-1 px-1 " />
          </figure>
        </div>
        <div classname="navbar-end">
          <div classname="navbar-item">
            <div classname="buttons">

            <li><Link to="/">Home</Link></li>
              {/* <a classname="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a classname="button is-light">
            Log in
          </a> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


export default Nav;

