import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { Button, Navbar} from 'react-bulma-components'

// import 'bulma/css/bulma.css'
// import '../App.sass';

class Nav extends Component {
  render() {
    return (

      <Navbar color="warning" style={{ height: '75px'}}>
        <Navbar.Brand>
          <Navbar.Item>
          <Link to="/">
          MOCKBUSTER

            </Link>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item dropdown hoverable href="#">
           
              <Navbar.Dropdown>
                <Navbar.Item href="#">
                  Subitem 1
                </Navbar.Item>
                <Navbar.Item href="#">
                  Subitem 2
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item>
            <Link to="/login">
                  <Button color='link'>Log In</Button>
                  </Link>
                  </Navbar.Item>
                  <Navbar.Item>
                  <Link to="/signup">
                  <Button color='link'>Sign Up</Button>
                  </Link>
                  </Navbar.Item>
                  
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>




      // <nav class="navbar is-warning">
      //   <div class="navbar-brand">
      //     <Link to="/">
      //       <figure class="image is-96x96 ml-3">
      //         <img src="https://iconape.com/wp-content/png_logo_vector/blockbuster-video-1.png" alt="bbuster" classname="py-1 px-1 " />
      //       </figure>
      //     </Link>
      //   </div>
      //   <div class="navbar-end">
      //     <div class="navbar-item">
      //       <div class="buttons">

      //         <Button color="info" outlined rounded size="large">
      //           Our Button
      //         </Button>



      //         <Link to="/signup">
      //           <a class="button is-link m-3">
      //             <strong>Sign up</strong>
      //           </a>
      //         </Link>

      //         <Link to="/login">
      //           <a class="button is-info m-3">
      //             Log in
      //           </a>
      //         </Link>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    )
  }
}


export default Nav;

