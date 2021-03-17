import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    alert("Sessions login coming soon!")
    // fetch('/session', { //or whatever Peter's route is for validating a log in
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(res => {
    //   if (res.status === 200) {
    //     this.props.history.push('/');
    //   } else {
    //     const error = new Error(res.error);
    //     throw error;
    //   }
    // })
    // .catch(err => {
    //   console.error(err);
    //   alert('Error logging in please try again');
    // });
  }

  // componentDidMount() {
  //   //GET message from server using fetch api
  //   fetch('/api/home')
  //     .then(res => res.text())
  //     .then(res => this.setState({message: res}));
  // }
  render() {
    return (

      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>

      // <div classname="container">
      //   <div classname="columns is-mobile is-centered is-vcentered">
      //     <div classname="column is-half mt-6">

      //       <figure classname="image is-3by1 ">
      //         {/* <img src="https://iconape.com/wp-content/png_logo_vector/blockbuster-video-1.png" alt="barbell" classname="logo-image" /> */}
      //   </figure>
      // </div>
      //     </div>

      //     <h1 classname="is-size-1 is-uppercase has-text-centered has-text-weight-bold has-text-link mt-4 is-family-monospace	"> Mockbuster Login</h1>
      //     <h2 classname="subtitle has-text-centered "> me gusta lo que veo</h2>
      //     <div classname="columns is-centered">
      //       <div classname="column is-half is-centered m-3">

      //         <form action="/sessions" method="POST">
      //           <div classname="field">
      //             <label classname="label is-family-monospace is-size-5	">Username</label>
      //             <p classname="control has-icons-left">
      //               <input classname="input is-large " type="text" name="username" required />
      //               <span classname="icon is-small is-left">
      //                 <i classname="fas fa-user"></i>
      //               </span>
      //             </p>
      //           </div>

      //           <div classname="field">
      //             <label classname="label is-family-monospace is-size-5	">Password</label>
      //             <p classname="control has-icons-left">
      //               <input classname="input is-large" type="password" name="password" />
      //                 <span classname="icon is-small is-left">
      //                   <i classname="fas fa-lock"></i>
      //                 </span>
      //                    </p>

      //       </div>

      //             <input classname="button is-info is-large is-fullwidth mt-6 mb-6 is-family-monospace	" type="submit" name="Submit User" />

      //     </form>

      //   </div>
      //       </div>
      //     </div>



    );
  }
}