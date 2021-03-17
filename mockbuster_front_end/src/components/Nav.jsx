import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { Button, Navbar } from 'react-bulma-components'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

// import 'bulma/css/bulma.css'
// import '../App.sass';


// NOTES 3/17/2020
/* Fix Nav bar dom nesting issues that appeared in console, next need to work on making hamburger drop down is working and include the JS involved in that 
*/

class Nav extends Component {
  render() {
    return (

      // <Navbar color="warning" style={{ height: '75px' }}>
        
      //   <Navbar.Brand>
      //     <Navbar.Item>
      //       {/* <Link to="/"> */}
      //         MOCKBUSTER
      //       {/* </Link> */}
      //     </Navbar.Item>
      //     <Navbar.Burger />
      //   </Navbar.Brand>

      //   <Navbar.Menu >
      //     <Navbar.Container position="end">
      //       <Navbar.Item>
      //         {/* <Link to="/login"> */}
      //           <Button color='link'>Log In</Button>
      //         {/* </Link> */}
      //       </Navbar.Item>
      //       <Navbar.Item>
      //         {/* <Link to="/signup"> */}
      //           <Button color='link'>Sign Up</Button>
      //         {/* </Link> */}
      //       </Navbar.Item>
      //     </Navbar.Container>
      //   </Navbar.Menu>

      // </Navbar>




      <nav className="navbar is-warning">
        <div className="navbar-brand">
          <Link to="/">
            <figure className="image is-96x96 ml-3">
              <img src="https://iconape.com/wp-content/png_logo_vector/blockbuster-video-1.png" alt="bbuster" className="py-1 px-1 " />
            </figure>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">

    
              <Link to="/signup">
                <a className="button is-link m-3">
                  <strong>Sign up</strong>
                </a>
              </Link>

              <Link to="/login">
                <a className="button is-info m-3">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </div>

        <Switch>

{/* //Pass Current State as Props to the Home Component */}
{/* HOME.JSX is the parent of the ADD A MOVIE/WATCHLIST/INFORMATION Containers */}
<Route path="/login" exact component={Login} />
<Route path="/signup" exact component={Signup} />
</Switch>
      </nav>
    )
  }
}


export default Nav;

